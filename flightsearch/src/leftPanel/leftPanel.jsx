import React, {Component} from 'react';
import InputBox from '../@components/@inputBox/InputBox';
import Button from '../@components/@button/button';
import DatePicker from '../@components/@datePicker/datePicker';
import PriceRange from '../@components/@priceRange/priceRange';

import './leftPanel.css';

class LeftPanel extends Component {


  render() {

    console.log(this.props.state);
    const {price:{min,max,value}}=this.props.state;

    return (
        <div className="border">
          <div>
            <Button>Oneway</Button>
            <Button>Return</Button>
          </div>
          <div>
            <InputBox placeholder="origin" id="origin"></InputBox>
            <InputBox placeholder="destination" id="destination"></InputBox>
          </div>
          <div>
            origin Date <DatePicker></DatePicker>
            destination Date <DatePicker></DatePicker>
          </div>
          <div>
            passenger
            <div>
              <Button>+</Button>
              <Button>-</Button>
            </div>
          </div>
          <div>
            price range
            <PriceRange min={min} max={max} value={value}>
            </PriceRange>
          </div> <div>
            <Button>
              Search
            </Button>
          </div>
        </div>
  );
  }
  }

  export default LeftPanel;
