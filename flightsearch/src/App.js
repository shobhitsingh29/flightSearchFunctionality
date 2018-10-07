import React, {Component} from 'react';
import './App.css';
import LeftPanel from './leftPanel/leftPanel.jsx';
import RightPanel from './rightPanel/rightPanel.jsx';
import FLIGHTS from './assets/flightData/flight.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filteredFlights: FLIGHTS,
      count: 0,
      price: {
        min: 0,
        max: 10000,
        value: 0,
      },
      origin: '',
      originDate: '2018-10-18',
      destination: '',
      destinationDate: '2018-10-18',
      bookedIds: new Array(4).fill(false),
      bookedFlightIndex: '',
    };
  }

  handleFlightBooking = index => () => {
    this.setState({
      bookedFlightIndex: index,
    });
  };
  handlePassengerCountInc = () => {
    if (this.state.count < 10) {

      this.setState((prevState) => {
        return {count: prevState.count + 1};
      });
    }
  };
  handlePassengerCountDec = () => {
    if (this.state.count > 0) {
      this.setState((prevState) => {
        return {count: prevState.count - 1};

      });
    }
  };

  handleRangeChange = (event) => {
    this.setState(
        {
          price: {
            ...this.state.price,
            value: event.target.value,
          },
        });
  };
  handleOriginChange = (event) => {
    this.setState(
        {
          origin: event.target.value,
        });
  };
  handleDestinationChange = (event) => {
    this.setState(
        {
          destination: event.target.value,
        });
  };
  handleOriginDateChange = (event) => {
    this.setState(
        {
          originDate: event.target.value,
        });
  };
  handleDestinationDateChange = (event) => {
    this.setState(
        {
          destinationDate: event.target.value,
        });
  };
  search = () => {

    const flt = FLIGHTS.filter((val, key) => {

      if (val.price < this.state.price.value &&
          (this.state.origin && this.state.origin.toUpperCase() === val.from) &&
          (this.state.originDate && this.state.originDate ===
              val.depart_date) &&
          (this.state.destination && this.state.destination.toUpperCase() ===
              val.to) &&
          (this.state.destinationDate && this.state.destinationDate ===
              val.arrive_date)

      ) {

        return val;

      }
    });

    this.setState(
        {
          filteredFlights: flt,
        });

    console.log('st', this.state);
    console.log('prc', this.state.price.value);

  };

  render() {
    const {bookedFlightIndex, bookedIds} = this.state;
    bookedIds[bookedFlightIndex] = true;
    const actions = {
      handleRangeChange: this.handleRangeChange,
      search: this.search,
      handleOriginChange: this.handleOriginChange,
      handleDestinationChange: this.handleDestinationChange,
      handleOriginDateChange: this.handleOriginDateChange,
      handleDestinationDateChange: this.handleDestinationDateChange,
      handlePassengerCountInc: this.handlePassengerCountInc,
      handlePassengerCountDec: this.handlePassengerCountDec,
    };

    return (
        <div className="App">
          <h1>Welcome To Flight Search Engine</h1>
          <div className="container">
            <LeftPanel
                state={this.state}
                actions={actions}/>
            <RightPanel
                filteredFlights={this.state.filteredFlights}
                bookedFlightIndex={bookedFlightIndex}
                handleFlightBooking={this.handleFlightBooking}
                bookedIds={bookedIds}/>
          </div>
        </div>
    );
  }
}

export default App;
