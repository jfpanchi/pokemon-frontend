import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { PokemonCard } from '../components';

export const BuscarPage = (props) => {
  const {pokemones} = props; //lista de pokemones
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );
  //Condicion para mostrar pokemones
  if(q===''){
    var pokemonesEncontrados=[];
  } else {
    var pokemonesEncontrados = pokemones.filter(
        pokemon => pokemon.nombre.toLocaleLowerCase().includes(q)
      )
  }
  
  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && pokemonesEncontrados.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) =>{
    event.preventDefault();
    navigate(`?q=${ searchText }`);
  }

  return (
    <>
      <h1>Buscar</h1> 
      <hr />
      <div className="row">
          <div >
            <form onSubmit={ onSearchSubmit }>
              <input 
                type="text"
                placeholder="Buscar un pokemon"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
              />
              <button className="btn btn-outline-primary mt-1">
                Buscar
              </button>
            </form>
          </div>

          <div>
            <hr/>
            <div className="alert alert-primary animate__animated animate__fadeIn" 
                style={{ display: showSearch ? '' : 'none' }}>
              Buscar un pokemon
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No se encontro al pokemon <b>{ q }</b>
            </div>

             <div className='row rows-cols-1 row-cols-md-4 row-col-sm-2 g-3 animate__animated animate__fadeIn3'>
             {
              pokemonesEncontrados.map( pokemon => (
                <PokemonCard key={ pokemon.id } {...pokemon } />
              ))
            }
             </div>
            <hr/>
          </div>
      </div>
      

    </>
  )
}
