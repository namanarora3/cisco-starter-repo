import React, { Component } from 'react';
import './App.css';
import Banner from './banner';
import Exhibit from './Exhibit';
import IPAddressDisplay from './IPAddressDisplay';
import LatencyDisplay from './connector';

function App() {
  return (
    <div className="App">
      <Banner title={"Sextant"} />
      <Exhibit heading="IPv4 Address">
        <IPAddressDisplay ipv6={false} />
      </Exhibit>

      <Exhibit heading="IPv6 Address">
        <IPAddressDisplay ipv6={true} />
      </Exhibit>

      <Exhibit heading="Network Latency">
        <LatencyDisplay/>
      </Exhibit>
    </div>
  );
}

export default App;
