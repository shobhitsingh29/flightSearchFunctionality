import React, { Component } from 'react';
import './rightPanel.css';
import Button from '../@components/@button/button';;

class FlightItem extends Component {

  abc = () => {
    console.log();
  }
  render() {

  	const {singleFlightData, flightIndex, bookedFlightIndex, handleFlightBooking} = this.props;
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
  

    return (
      <div className="singleFlightContainer">
        <div className="price">{price}</div>
        <table>
          <tbody>
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
          </tbody>
        </table>
        {flightIndex === bookedFlightIndex ? <Button>Booked</Button>: <Button onClick={handleFlightBooking(flightIndex)}>Book this flight</Button>}
      </div>
    );
  }
}

export default FlightItem;
