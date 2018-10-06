import React, { Component } from 'react';
import './App.css';
import LeftPanel from './leftPanel/leftPanel.jsx';
import RightPanel from './rightPanel/rightPanel.jsx';

class App extends Component {
  constructor(){
    super();
    this.state={};
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <LeftPanel state={this.state}/>
          <RightPanel state={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
