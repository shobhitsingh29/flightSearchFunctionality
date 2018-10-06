import React, { Component } from 'react';
import './rightPanel.css';
import FLIGHTS from '../assets/flightData/flight.js';
import FlightListing from './flightListing.jsx';

class RightPanel extends Component {
  render() {
  	const {bookedFlightIndex, bookedIds, handleFlightBooking} = this.props;
    return (
      <div className="rightPanelContainer">
        <h3 className="allFlightsTag">All Flights</h3>
        <FlightListing FLIGHTS={FLIGHTS} bookedFlightIndex={bookedFlightIndex} bookedIds={bookedIds} handleFlightBooking={handleFlightBooking}/>
      </div>
    );
  }
}

export default RightPanel;
