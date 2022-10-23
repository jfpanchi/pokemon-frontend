import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '../../ui/components';
import { PokemonPage } from '../pages';
import { PokemonDetallePage } from '../pages';
import { getPokemones } from '../helpers';

export const PokemonesRoutes = () => {
  const dispatch = useDispatch();
    const { pokemones = [] } = useSelector( state => state.pokemones ); //Pokemones 
    useEffect(() => {
      dispatch( getPokemones());    
    }, [])
  return (
    <>
        <Navbar></Navbar>
        <div className="container">
            <Routes>
                <Route path="pokemones" element={<PokemonPage pokemones={pokemones} />} /> {/* lista de pokemones compartidos en props */}
                <Route path="pokemon/:id" element={<PokemonDetallePage pokemones={pokemones}/>} />
                <Route path="/*" element={<Navigate to="/pokemones" />} />
            </Routes>
        </div>


    </>
  )
}