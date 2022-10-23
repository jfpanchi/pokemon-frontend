import { pokemonApi } from '../../api';
import { setPokemones, startLoadingPokemones } from './pokemonSlice';

export const getPokemones = () => {
    return async( dispatch ) => {
        dispatch( startLoadingPokemones() );
        const { data } = await pokemonApi.get("/pokemones"); // Tomar los pokemones desde la api 
        dispatch( setPokemones({ pokemones: data.pokemones}) );
    }
}