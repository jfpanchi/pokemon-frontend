import { configureStore } from '@reduxjs/toolkit';
import { pokemonSlice } from './';

export const store = configureStore({
  reducer: {
      pokemones: pokemonSlice.reducer, //pokemon Reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})