import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';

import Pokedex from './components/Pokedex';
import pokemons from './data';

class  App extends Component {
  render(){
    return (
    <main className="App">
      <Pokedex pokemons={ pokemons } />
      <Footer />
    </main>
    );
  }
}
export default App;
