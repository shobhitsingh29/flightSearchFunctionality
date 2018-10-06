import React, {Component} from 'react';
import './App.css';
import LeftPanel from './leftPanel/leftPanel.jsx';
import RightPanel from './rightPanel/rightPanel.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      price: {
        min: 0,
        max: 10000,
        value: '',
      },
    };
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
alert();
  };

  render() {
    console.log('st', this.state);
    const actions = {
      handleRangeChange: this.handleRangeChange,
      search: this.search,
    };

    return (
        <div className="App">
          <div className="container">
            <LeftPanel state={this.state} actions={actions}/>
            <RightPanel state={this.state}/>
          </div>
        </div>
    );
  }
}

export default App;
