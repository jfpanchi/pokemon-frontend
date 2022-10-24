import { useState } from 'react';
import { PokemonCard } from './';


export const PokemonList = (props) => {
    const {isLoading,pokemones} = props;
    if(isLoading){ //Condición para asegurar que los pokemones esten cargados
        return(
            <h1>Cargando...</h1>
        )
    } 
    else {
        const pokemonesPorPagina = 10;
        const [elementos, setElementos] = useState(pokemones.slice(0,pokemonesPorPagina));
        const [paginaActual, setpaginaActual] = useState(0);
       
        const aumentarPagina = () =>{
            const paginaSiguiente = paginaActual + 1;
            const pagina = paginaSiguiente * pokemonesPorPagina;
            if(pagina >= pokemones.length) return;
            setElementos([...pokemones].splice(pagina, pokemonesPorPagina));
            setpaginaActual(paginaSiguiente);
    
            
        }
    
        const disminuirPagina = () =>{
            const paginaAnterior = paginaActual - 1;
            const pagina = paginaAnterior * pokemonesPorPagina;
            if(pagina < 0) return;
            setElementos([...pokemones].splice(pagina, pokemonesPorPagina));
            setpaginaActual(paginaAnterior);
        }
        return (
            <div className="row rows-cols-4 row-cols-md-5 row-col-sm-2 g-3 animate__animated animate__fadeIn">
                {
                    elementos.map( pokemon => (
                        <PokemonCard  /* Tarjeta de pokemon enlistado */
                            key={ pokemon.id } 
                            { ...pokemon}
                        />
                    ))
                    
                }
                
                <ul className='pagination'>
                    <li className='page-item'><a className='page-link' href='#' onClick={disminuirPagina}>Anterior</a></li>
                    <li className='page-item'><a className='page-link' href='#' onClick={aumentarPagina}>Siguiente</a></li>
                </ul>
    
            </div> 
        )
    }
    
}