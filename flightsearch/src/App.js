import React, {Component} from 'react';
import './App.css';
import LeftPanel from './leftPanel/leftPanel.jsx';
import RightPanel from './rightPanel/rightPanel.jsx';
import FLIGHTS from './assets/flightData/flight.js';


class App extends Component {
  constructor() {
    super();
    this.filteredFlights=FLIGHTS;

    this.state = {
      price: {
        min: 0,
        max: 10000,
        value: '',
      },
      bookedFlightIndex: ''
    };
  }

  handleFlightBooking = index => () => {
    this.setState({
      bookedFlightIndex: index
    })
  }

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
this.filteredFlights=this.filteredFlights.filter((val,key)=>{





})



  };

  render() {
    const {bookedFlightIndex} = this.state;
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
              filteredFlights={this.filteredFlights}
              bookedFlightIndex={bookedFlightIndex}
              handleFlightBooking={this.handleFlightBooking} />
        </div>
      </div>
    );
  }
}

export default App;
