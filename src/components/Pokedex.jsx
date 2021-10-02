import React, { Component } from 'react';

import Pokemon from './Pokemon';
import Footer from './Footer';

const INITIAL_STATE = 0;

class Pokedex extends Component {
  constructor(){
    super();
    this.state = {
      currentPokemon:INITIAL_STATE,
      pokemonByType:'all'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(currentNumber, type){
    const { pokemons } = this.props;
    const { currentPokemon } = this.state;
    if( currentPokemon < pokemons.length - 1){
      this.setState(( prevState ) => ({
        type:type,
        currentPokemon: prevState.currentPokemon + 1,
      }));
    }else{
      this.setState({ currentPokemon: INITIAL_STATE })
    }
  }

  render(){
    const { pokemons } = this.props; 
    const { currentPokemon, type } = this.state;
    return(
      <section>
        <h1>Pokedex</h1>
        { 
          pokemons
          .filter( pokemon => pokemon.type === type )
          .map( pokemonByType => (
            <Pokemon pokemon={ pokemonByType } />
          ))
        } 
        <Footer onChange={ this.handleChange } />
      </section>
    );
  }
}

export default Pokedex