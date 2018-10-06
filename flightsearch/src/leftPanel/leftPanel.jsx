import React, {Component} from 'react';
import InputBox from '../@components/@inputBox/InputBox';
import Button from '../@components/@button/button';
import DatePicker from '../@components/@datePicker/datePicker';
import PriceRange from '../@components/@priceRange/priceRange';

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
            <PriceRange min={0}>
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
