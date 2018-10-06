import React, { Component } from 'react';
import './rightPanel.css';

class FlightListing extends Component {
  render() {
<<<<<<< HEAD
  	const {singleFlightData} = this.props;
    const {price, number, return_trip :{number: returnTripNumber}} = singleFlightData;
    console.log('singleFlightData', singleFlightData);
    return (
      <div className="singleFlightContainer">
        <div>{price}</div>
        
=======
  //	const {singleFlightData} = this.props;
   // console.log('singleFlightData', singleFlightData);
    return (
      <div className="singleFlightContainer">d
>>>>>>> 3593b73d67066b0c40412ef04b6e9bbe741405aa
      </div>
    );
  }
}

export default FlightListing;
