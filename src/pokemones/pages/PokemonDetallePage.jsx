import { Navigate, useNavigate, useParams } from 'react-router-dom';

export const PokemonDetallePage = (props) => {
  const {pokemones} = props; //lista de pokemones
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = pokemones.find( pokemon => pokemon.id === id ); //seleccion de pokemon por id

  const onNavigateBack = () => {
    navigate(-1);
  }

  if ( !pokemon ) {
    return <Navigate to="/pokemones" />
  }
  
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={pokemon.image} 
          alt={pokemon.name}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{ pokemon.nombre.charAt(0).toUpperCase() + pokemon.nombre.substr(1).toLowerCase()  }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Descripción:</b> {pokemon.descripcion} </li>
          <li className="list-group-item"> <b>Tipo:</b> {pokemon.tipo} </li>
          <li className="list-group-item"> <b>Altura:</b> {pokemon.altura} metros</li>
          <li className="list-group-item"> <b>Peso:</b> {pokemon.peso} kilogramos </li>
        </ul>
        <h5 className="mt-3"> Evoluciones </h5>
        { pokemon.evolucion.map((evolucion, index) => (
          <p key={index}>{evolucion.nombre}</p>
        )) }

        <button 
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >
          Regresar
        </button>

      </div>

    </div>
  )
}
