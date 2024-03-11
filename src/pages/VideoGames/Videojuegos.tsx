import { NavLink } from "react-router-dom";
import "./videojuegos.css";
import juegosMK from "../../data/videogames.json";

function Videojuegos() {

  return (
    <div className="divPrincipalVideojuegos">
      <div className="Games">
        {juegosMK.map((juego) => {
          return (
            <NavLink
              to={`/videojuegos/${juego.key}`}
              key={juego.key}
              {...juego}
            >
              <img className="Games" src={juego.imgUrl}></img>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Videojuegos;
