import React from 'react';
import './Exhibit.css'; // Import the CSS file for the component

const Exhibit = ({ heading, children }) => {
  return (
    <div className="exhibit">
      <h2 className="exhibit-heading">{heading}</h2>
      <div className="exhibit-content">{children}</div>
    </div>
  );
};

export default Exhibit;
