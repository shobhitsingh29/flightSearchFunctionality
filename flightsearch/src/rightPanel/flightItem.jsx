import React, { Component } from 'react';
import './rightPanel.css';

class FlightListing extends Component {
  render() {
  	const {singleFlightData} = this.props;
    console.log('singleFlightData', singleFlightData);
    return (
      <div className="singleFlightContainer">

      </div>
    );
  }
}

export default FlightListing;