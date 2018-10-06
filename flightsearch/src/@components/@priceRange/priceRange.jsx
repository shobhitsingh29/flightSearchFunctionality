import React, {Component} from 'react';
import './priceRange.scss';

class PriceRange extends Component {


  render() {
    return (
        <input
            value={this.props.value||"0"}
            type="range" min={this.props.min||'0'}
            max={this.props.max||'500'}
            step={this.props.step||'50'}
            onChange={this.props.onChange} />
    );
  }
}

export default PriceRange;
