import React, { Component } from 'react';

import Pokemon from './Pokemon';

class Pokedex extends Component {
  constructor(){
    super();
    this.state = {
      pokemons:[],
      currentPokemon:0
    }
  }
  render(){
    const { pokemons } = this.props; 
    const { currentPokemon } = this.state;
    return(
      <section>
        <h1>Pokedex</h1>
        <Pokemon pokemon={ pokemons[currentPokemon] } />  
      </section>
    );
  }
}

export default Pokedex