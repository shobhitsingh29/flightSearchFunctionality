import React, { Component } from 'react';
import './rightPanel.css';
import FlightListing from './flightListing.jsx';

class RightPanel extends Component {
  render() {
  	const {bookedFlightIndex, handleFlightBooking,filteredFlights} = this.props;
    return (
      <div className="rightPanelContainer">
        <h3 className="allFlightsTag">All Flights</h3>
        <FlightListing FLIGHTS={filteredFlights} bookedFlightIndex={bookedFlightIndex} handleFlightBooking={handleFlightBooking}/>
      </div>
    );
  }
}

export default RightPanel;
