import { Link } from "react-router-dom";

export const PokemonCard = ({ id, nombre, descripcion, image }) => {
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <img src={image} className="card-img-top" alt={nombre.charAt(0).toUpperCase()+ nombre.substr(1).toLowerCase()} />
        <div className="card-body" align="center">
          <h5 className="card-title">{nombre.charAt(0).toUpperCase() + nombre.substr(1).toLowerCase()}</h5>
          <p className="card-text">
            <small className="text-muted">{descripcion}</small>
          </p>
          <Link
            className="btn btn-primary"
            align="center"
            to={`/pokemon/${id}`}
          >
            {/* Busqueda de pokemon por ruta */}
            Más Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};
