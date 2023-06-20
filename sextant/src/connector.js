import React, { useEffect, useState } from 'react';
import Exhibit from './Exhibit';

const LatencyDisplay = () => {
  const [latency, setLatency] = useState(null);
  const [waiting, setWaiting] = useState(true);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:55455');

    ws.onopen = () => {
      console.log('WebSocket connection established.');
      setSocket(ws);
    };

    ws.onmessage = (event) => {
      const packetTimestamp = parseInt(event.data, 10);
      const currentTimestamp = Date.now();
      const packetLatency = currentTimestamp - packetTimestamp;
      setLatency(packetLatency);
      setWaiting(false);
    };

    return () => {
      if (socket) {
        socket.close();
        console.log('WebSocket connection closed.');
      }
    };
  }, []);

  return (
    <div>
      <Exhibit heading="Packet Latency">
        <p>{waiting ? 'Waiting for packets...' : `${latency} ms`}</p>
      </Exhibit>
    </div>
  );
};

export default LatencyDisplay;
