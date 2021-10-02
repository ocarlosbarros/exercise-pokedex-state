import React, { Component } from 'react';

import './Button.css';

class Button extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.count = 0;
  }

  handleClick({ target: { name } }){
    const { onClick } = this.props;
    this.count = this.count + 1;
    onClick(this.count, name);
  }

  render(){
    const { type, name, className, value } = this.props;
    return(
      <button className={ className } type={ type } name={ name } onClick={ this.handleClick }>{ value }</button>
    );
  }
}

export default Button;