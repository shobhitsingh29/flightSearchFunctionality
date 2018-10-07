import React, {Component} from 'react';
import InputBox from '../@components/@inputBox/InputBox';
import Button from '../@components/@button/button';
import DatePicker from '../@components/@datePicker/datePicker';
import PriceRange from '../@components/@priceRange/priceRange';

import './leftPanel.css';

class LeftPanel extends Component {

  render() {

    const {price: {min, max, value}} = this.props.state;
    const {actions: {handleRangeChange, search, handleOriginChange, handleDestinationChange, handleOriginDateChange, handleDestinationDateChange}} = this.props;

    return (
        <div className="border">
          <>
            <Button>Oneway</Button>
            <Button>Return</Button>
          </>
          <>
            <InputBox onChange={handleOriginChange} placeholder="origin"
                      id="origin"></InputBox>
            <InputBox onChange={handleDestinationChange}
                      placeholder="destination" id="destination"></InputBox>
          </>
          <>
            <h4> ORIGIN DATE</h4>

            <DatePicker
              onChange={handleOriginDateChange}></DatePicker>
            <h4>DESTINATION DATE </h4>
              <DatePicker
              onChange={handleDestinationDateChange}></DatePicker>
          </>
          <>
            passenger
            <div>
              <Button>+</Button>
              <Button>-</Button>
            </div>
          </>
          <>
            price range
            <PriceRange min={min} max={max} value={value}
                        onChange={handleRangeChange}>
            </PriceRange>
          </>
          <div>
            <Button onClick={search}>search</Button>
          </div>
        </div>

    );
  }
}

export default LeftPanel;
