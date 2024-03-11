import { NavLink } from "react-router-dom";
import logoMK from "../img/MK_Logo.png";
import "./nav.css";
import { useAppSelector } from '../hooks/store';

function Nav() {
  const carrito = useAppSelector((state) => state.carrito)

  return (
    <div className="divPrincipalNav">
      <a href="#" id="menu-icono">
        <i className="bi bi-card-list"></i>
      </a>

      <ul className="ul">
        <NavLink to="/" className="logoMK">
          <a href="/" className="logoMK">
            <img className="logoMK" src={logoMK}></img>
          </a>
        </NavLink>
        <NavLink to="/" className="link">
          INICIO
        </NavLink>
        <NavLink to="/videojuegos" className="link">
          VIDEOJUEGOS
        </NavLink>
        <NavLink to="/peliculas" className="link">
          PELICULAS
        </NavLink>
        {}
        <NavLink to="/store" className="link">
          STORE
          {carrito.length > 0 && (
            <span className="contador-carrito">{carrito.length}</span>
          )}
        </NavLink>
        <NavLink
          to="https://discord.com/invite/mortalkombat11"
          className="link"
          target="_blank"
        >
          FORO
        </NavLink>
      </ul>
    </div>
  );
}

export default Nav
