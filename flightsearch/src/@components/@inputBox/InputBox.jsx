import React, {Component} from 'react';
import './InputBox.scss';

class InputBox extends Component {
  render() {
    return (

          <div className="group">
            <input type="text" id={this.props.id} required="required"/>
            <label htmlFor={this.props.id}>{this.props.placeholder}</label>
        </div>
    );
  }
}

export default InputBox;
