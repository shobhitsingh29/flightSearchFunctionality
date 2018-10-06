import React, {Component} from 'react';
import './priceRange.scss';

class PriceRange extends Component {
  render() {
    return (
        <input type="range" min={this.props.min||'100'} max={this.props.max||'500'} step={this.props.step||'50'}  />
    );
  }
}

export default PriceRange;
