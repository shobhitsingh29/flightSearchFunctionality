import React, { Component } from 'react';
import './rightPanel.css';

class FlightItem extends Component {
  render() {

  	const {singleFlightData} = this.props;
    const {price,
     number,
      from_code,
      to_code,
      depart_date,
      arrive_date,
      return_trip :{
         number: returnTripNumber,
         from_code: returnTripFromCode,
         to_code: returnTripToCode,
         depart_date: returnTripDepartDate,
         arrive_date: returnTripArriveDate
        }
      } = singleFlightData;
    console.log('singleFlightData', singleFlightData);
  

    return (
      <div className="singleFlightContainer">
        <div className="price">{price}</div>
        <table>
          <tr>
            <td>{number}</td>
            <td>{returnTripNumber}</td>
          </tr>
          <tr>
            <td>{from_code} >> {to_code}</td>
            <td>{returnTripFromCode} >> {returnTripToCode}</td>
          </tr>
          <tr>
            <td>Depart: {new Date(depart_date).toLocaleString()}</td>
            <td> Depart: {new Date(returnTripDepartDate).toLocaleString()}</td>
          </tr>
          <tr>
            <td>Arrive: {new Date(arrive_date).toLocaleString()}</td>
            <td>Arrive: {new Date(returnTripArriveDate).toLocaleString()}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default FlightItem;
