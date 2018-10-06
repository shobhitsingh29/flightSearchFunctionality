import React, { Component } from 'react';
import './rightPanel.css';
import FlightItem from './flightItem.jsx';


class FlightListing extends Component {
  render() {
    const {FLIGHTS} = this.props;
    return (
        <div className="flightListContainer">
        {/*  {FLIGHTS.map((value, index) => {
            <FlightItem singleFlightData={value} />
          })}*/}
        </div>
    );
  }
}

export default FlightListing;
