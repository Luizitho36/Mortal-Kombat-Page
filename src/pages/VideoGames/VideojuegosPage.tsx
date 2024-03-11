import "./VideojuegosPage.css";
import { useLocation } from "react-router-dom";
import juegoPage from "../../data/videogames.json";

function VideojuegosPage() {
  const location = useLocation();
  console.log(location);

  const paginaElegida = juegoPage.filter(
    (index) => "/videojuegos/" + index.key === location.pathname
  );

  console.log(paginaElegida);

  return (
    <div className="MKVideojuegosPage">
      <br></br>
      <img className="videogamesMK" src={paginaElegida[0].imgUrl}></img>
      <h1>{paginaElegida[0].title}</h1>
      <br></br>
      <p>{paginaElegida[0].argumento}</p>
      <br></br>
      <br></br>
      <p>{paginaElegida[0].argumento2}</p>
      <br></br>
      <br></br>
    </div>
  );
}

export default VideojuegosPage;
