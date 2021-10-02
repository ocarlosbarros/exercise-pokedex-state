import React, { Component } from 'react';
import Button from './Button';

import './Footer.css'

class Footer extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
  }  
  
  handleChange(currentNumber, inputName) {
    const { onChange } = this.props;
    onChange(currentNumber, inputName);
  }
  
  render(){
    return(
      <footer className="flex">
        <Button className="all" type="button" name="all" value="All"  onClick={ this.handleChange }  />
        <Button className="eletric" type="button" name="eletric" value="Eletric"  onClick={ this.handleChange }  />
        <Button className="fire" type="button" name="fire" value="Fire"  onClick={ this.handleChange }  />
        <Button className="bug" type="button" name="bug" value="Bug"  onClick={ this.handleChange }  />
        <Button className="poison" type="button" name="poison" value="Poison"  onClick={ this.handleChange }  />
        <Button className="psychic" type="button" name="psychic" value="Psychic"  onClick={ this.handleChange }  />
        <Button className="normal" type="button" name="normal" value="Normal"  onClick={ this.handleChange }  />
        <Button className="dragon" type="button" name="dragon" value="Dragon"  onClick={ this.handleChange }  />
        <Button className="btn-next" type="button" name="all" value="Próximo Pokemon"  onClick={ this.handleChange }  />
      </footer>
    );
  }
}

export default Footer;