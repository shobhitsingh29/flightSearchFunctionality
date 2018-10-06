import React, { Component } from 'react';
import './rightPanel.css';
import FLIGHTS from '../assets/flightData/flight.js';
import FlightListing from 'src/rightPanel/flightListing.jsx';

class RightPanel extends Component {
  render() {
  	console.log('flightsData', FLIGHTS);
    return (
      <div className="rightPanelContainer">
        Right panel
        <FlightListing FLIGHTS={FLIGHTS}/>
      </div>
    );
  }
}

export default RightPanel;
