import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';

import Pokedex from './components/Pokedex';

class  App extends Component {
  render(){
    return (
    <main className="App">
      <Pokedex />
      <Footer />
    </main>
    );
  }
}
export default App;
