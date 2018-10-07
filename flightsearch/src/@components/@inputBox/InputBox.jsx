import React, {Component} from 'react';
import './InputBox.scss';

class InputBox extends Component {
  render() {
    return (

          <div >
            <input type="text" className="group"
                   id={this.props.id}
                   onChange={this.props.onChange}
                   placeholder={this.props.placeholder.toUpperCase()+" CITY"}
                   required="required"/>
        </div>
    );
  }
}

export default InputBox;
