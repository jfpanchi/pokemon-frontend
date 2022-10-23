import { PokemonCard } from './';

export const PokemonList = (props) => {
    const {pokemones} = props;
    return (
        <div className=" row rows-cols-1 row-cols-md-4 g3 animate__animated animate__fadeIn">
            {
                pokemones.map( pokemon => (
                    <PokemonCard  /* Tarjeta de pokemon enlistado */
                        key={ pokemon.id } 
                        { ...pokemon}
                    />
                ))
            }
        </div> 
    )
}