import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PokemonesRoutes } from '../pokemones';
import { store } from '../pokemones/helpers/store';
export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={ /* Redirige las rutas */
              <Provider store={store}> {/* Pokemones cargados desde el componenete principal*/}
                <PokemonesRoutes></PokemonesRoutes>
              </Provider>
            } />
        </Routes>
    </>
  )
}