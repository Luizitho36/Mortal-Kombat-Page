import { NavLink } from "react-router-dom";
import "./peliculas.css";
import peliculasMK from '../../data/movies.json';

function Peliculas() {
  return (
    <div className="divPrincipalPeliculas">
      
      <div className="Movies">
        {peliculasMK.map((pelicula) => {
          return (
            <NavLink
              to={`/peliculas/${pelicula.key}`}
              key={pelicula.key}
              {...pelicula}
            >
              <img className="Movies" src={pelicula.imgUrl}></img>
            </NavLink>
          );
        })}
      </div>

      <br></br>
      <br></br>
    </div>
  )
}

export default Peliculas