import React, {Component} from 'react';
import InputBox from '../@components/@inputBox/InputBox';
import Button from '../@components/@button/button';
import './leftPanel.css';

class LeftPanel extends Component {
  render() {
    return (
        <div className="border">
          <div>
            <Button>Oneway</Button>
            <Button>Return</Button>
          </div>
          <div>
            <InputBox placeholder="origin"></InputBox>
            <InputBox placeholder="destination"></InputBox>
          </div>
        </div>
    );
  }
}

export default LeftPanel;
