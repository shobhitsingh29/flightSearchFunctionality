import React, {Component} from 'react';
import './App.css';
import LeftPanel from './leftPanel/leftPanel.jsx';
import RightPanel from './rightPanel/rightPanel.jsx';
import FLIGHTS from './assets/flightData/flight.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filteredFlights:FLIGHTS,
      price: {
        min: 0,
        max: 10000,
        value: '',
      },
      bookedIds: new Array(4).fill(false),
      bookedFlightIndex: ''
    };
  }

  handleFlightBooking = index => () => {
    this.setState({
      bookedFlightIndex: index,
    });
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
  search = () => {


    const flt= FLIGHTS.filter((val, key) => {



      if(val.price<this.state.price.value){


        return val;


      }
    });



    this.setState(
          {
              filteredFlights:flt,
          });

    console.log("filteredFlights1",this.state.filteredFlights)
    console.log("prc",this.state.price.value)

  };


  render() {
    const {bookedFlightIndex, bookedIds} = this.state;
    bookedIds[bookedFlightIndex] = true;
    const actions = {
      handleRangeChange: this.handleRangeChange,
      search: this.search,
    };

    return (
      <div className="App">
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
