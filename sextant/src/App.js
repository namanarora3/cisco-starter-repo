import React, { Component } from 'react';
import './App.css';
import Banner from './banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner title={"Sextant"} />
      <Exhibit heading="Exhibit 1">
        {/* Content or components to display */}
      </Exhibit>
      <Exhibit heading="Exhibit 2">
        {/* Content or components to display */}
      </Exhibit>
    </div>
  );
}

export default App;
