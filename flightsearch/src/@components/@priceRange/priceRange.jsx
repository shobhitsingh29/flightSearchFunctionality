import React, {Component} from 'react';
import './priceRange.scss';

class PriceRange extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value: 0
    }
  }
  handleChange=(event)=> {
    this.setState({value: event.target.value});
  }

  render() {
    console.log("st",this.state);
    return (
        <input
            value={this.state.value||this.props.value}
            type="range" min={this.props.min||'0'}
            max={this.props.max||'500'}
            step={this.props.step||'50'}
            onChange={this.handleChange} />
    );
  }
}

export default PriceRange;
