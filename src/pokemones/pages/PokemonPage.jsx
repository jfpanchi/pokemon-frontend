import { useState } from 'react';
import { PokemonList } from '../components';

export const PokemonPage = (props) => {
    const {isLoading, pokemones} = props; //pokemones desde props
    
    return (
      <>
        <h1 align="center">PokeAPI Challenge</h1>
        <h6 align="center">Pokemones y sus características </h6>
        <hr />
          <PokemonList pokemones={pokemones} isLoading={isLoading} > {/* pokemones cargados en el componente esperado */} </PokemonList>       
         <hr />
      </>
    )
}