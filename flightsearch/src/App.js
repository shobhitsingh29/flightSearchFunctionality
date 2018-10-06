import React, { Component } from 'react';
import './App.css';
import LeftPanel from './leftPanel/leftPanel.jsx';
import RightPanel from './rightPanel/rightPanel.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <LeftPanel />
          <RightPanel />
        </div>
      </div>
    );
  }
}

export default App;
