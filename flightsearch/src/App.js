import React, { Component } from 'react';
import './App.css';
import LeftPanel from './leftPanel/leftPanel.jsx';
import RightPanel from './rightPanel/rightPanel.jsx';

class App extends Component {
  constructor(){
    super();
    this.state={
      bookedFlightIndex: ''
    };
  }

  handleFlightBooking = index => () => {
    this.setState({
      bookedFlightIndex: index
    })
  }

  render() {
    const {bookedFlightIndex} = this.state;
    return (
      <div className="App">
        <div className="container">
          <LeftPanel state={this.state}/>
          <RightPanel bookedFlightIndex={bookedFlightIndex} handleFlightBooking={this.handleFlightBooking} />
        </div>
      </div>
    );
  }
}

export default App;
