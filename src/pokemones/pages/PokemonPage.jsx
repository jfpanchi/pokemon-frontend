import { PokemonList } from '../components';

export const PokemonPage = (props) => {
    const {pokemones} = props; //pokemones desde props
    return (
      <>
        <h1 align="center">PokeAPI Chacllenge</h1>
        <h6 align="center">Pokemones y Detalles</h6>
        <hr />
          <PokemonList pokemones={pokemones}> {/* pokemones cargados en el componente esperado */} </PokemonList>       
         <hr />
      </>
    )
}