import React, { Component } from 'react';
import './rightPanel.css';

class FlightListing extends Component {
  render() {
  	const {singleFlightData} = this.props;
    const {price, number, return_trip :{number: returnTripNumber}} = singleFlightData;
    console.log('singleFlightData', singleFlightData);
    return (
      <div className="singleFlightContainer">
        <div>{price}</div>
        
      </div>
    );
  }
}

export default FlightListing;
