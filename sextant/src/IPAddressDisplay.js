import React, { useEffect, useState } from 'react';

const IPAddressDisplay = ({ ipv6 }) => {
  const [ipAddress, setIPAddress] = useState('');

  useEffect(() => {
    const fetchIPAddress = async () => {
      const response = await fetch(
        `https://api64.ipify.org?format=json${ipv6 ? '&ipv6=true' : ''}`
      );
      const data = await response.json();
      setIPAddress(data.ip);
    };

    fetchIPAddress();
  }, [ipv6]);

  return (
    <div>
      <h2>Your Public IP Address</h2>
      <p>{ipAddress}</p>
    </div>
  );
};

export default IPAddressDisplay;

