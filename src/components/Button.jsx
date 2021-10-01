import React, { Component } from 'react';

import './Button.css';

class Button extends Component {
  render(){
    const { type, name } = this.props;
    return(
      <button className="btn-next" type={ type } name={ name }>{ name }</button>
    );
  }
}

export default Button;