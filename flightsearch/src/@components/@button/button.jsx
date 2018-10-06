import React, { Component } from 'react';
import './button.scss';

class Button extends Component {
  render() {
    return (
        <button value={this.props.value} className="btnBg">
          {this.props.children}
        </button>
  );
  }
  }

  export default Button;
