import React, {Component} from 'react';
import './datePicker.scss';

class DatePicker extends Component {
  render() {
    return (
        <input type="date" className="group" onChange={this.props.onChange}/>
    );
  }
}

export default DatePicker;
