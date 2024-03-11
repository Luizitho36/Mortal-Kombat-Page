import "./PeliculasPage.css";
import { useLocation } from "react-router-dom";
import peliculaPage from "../../data/movies.json";

function PeliculasPage() {
  const location = useLocation();
  console.log(location);

  const paginaElegida = peliculaPage.filter(
    (index) => "/peliculas/" + index.key === location.pathname
  );

  console.log(paginaElegida);

  return (
    <div className="MKPeliculasPage">
      <br></br>
      <img className="peliculasMK" src={paginaElegida[0].imgUrl}></img>
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

export default PeliculasPage;
