import React, {Component} from 'react';
import './InputBox.scss';

class InputBox extends Component {
  render() {
    return (
        <input type="text" placeholder={this.props.placeholder}/>
    );
  }
}

export default InputBox;
