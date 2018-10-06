import React, { Component } from 'react';
import './rightPanel.css';
import FlightListing from './flightListing.jsx';

class RightPanel extends Component {
  render() {
  	const {bookedFlightIndex, bookedIds, handleFlightBooking,filteredFlights} = this.props;
console.log("filteredFlights2",filteredFlights);
    return (
      <div className="rightPanelContainer">
        <h3 className="allFlightsTag">All Flights</h3>
        <FlightListing FLIGHTS={filteredFlights} bookedFlightIndex={bookedFlightIndex} bookedIds={bookedIds} handleFlightBooking={handleFlightBooking}/>
      </div>
    );
  }
}

export default RightPanel;
