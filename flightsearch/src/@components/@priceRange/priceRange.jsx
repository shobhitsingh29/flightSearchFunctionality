import React, {Component} from 'react';
import './priceRange.scss';

class PriceRange extends Component {


  render() {
    return (
        <div className="rangeCtrl">
        <input
            value={this.props.value||"0"}
            type="range" min={this.props.min||'0'}
            max={this.props.max||'500'}
            step={this.props.step||'50'}
            onChange={this.props.onChange}
            data-thumbwidth="20"
        />
        <output name="rangeVal">{this.props.value}</output>
          </div>
    );
  }
}

export default PriceRange;
