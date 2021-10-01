import React, { Component } from 'react';
import Button from './Button';

import './Footer.css'

class Footer extends Component {
  render(){
    return(
      <footer className="flex">
        <Button type="button" name="Próximo Pokemon" />
      </footer>
    );
  }
}

export default Footer;