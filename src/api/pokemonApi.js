import axios from 'axios';
import { getEnvVariables } from '../helpers/';

const { VITE_API_URL } = getEnvVariables();
const pokemonApi = axios.create({ //Crear formato de llamada con axios
    baseURL: VITE_API_URL,
});

export default pokemonApi;