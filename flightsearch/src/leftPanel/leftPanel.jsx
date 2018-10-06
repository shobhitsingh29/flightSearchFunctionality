import React, { Component } from 'react';
import Button from '../@components/@button/button';
import './leftPanel.css';

class LeftPanel extends Component {
  render() {
    return (
      <div >
        <Button >Oneway</Button>
        <Button >Return</Button>
      </div>
    );
  }
}

export default LeftPanel;
