import { createSlice } from '@reduxjs/toolkit';

// inicializacion y formateo de la lista de pokemones
export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemones: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemones: (state ) => {
            state.isLoading = true;
        },
        setPokemones: ( state, action ) => {
            state.isLoading = false;
            state.pokemones = action.payload.pokemones;
        }
    }
});

//Acciones generadas
export const { startLoadingPokemones, setPokemones } = pokemonSlice.actions;