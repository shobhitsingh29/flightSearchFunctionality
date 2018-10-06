import React, { Component } from 'react';
import './rightPanel.css';
import FlightItem from './flightItem.jsx';


class FlightListing extends Component {

  render() {
    const {FLIGHTS, bookedFlightIndex, handleFlightBooking} = this.props;
    return (
        <div className="flightListContainer">
        {FLIGHTS.map((value, index) => {
           return <FlightItem singleFlightData={value} key={index} flightIndex={index} 
           bookedFlightIndex={bookedFlightIndex} handleFlightBooking={handleFlightBooking}/>
        })}
        </div>
    );
  }
}

export default FlightListing;
