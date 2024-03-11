import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import MKHeader from "./img/Header.jpg";
import Home from "./pages/Home"
import Nav from "./components/Nav"
import Footer from "./components/Footer";
import { StorePage } from "./pages/Store/indexStore";
import { Carrito } from "./components/Carrito";
import Gracias_Por_Comprar from "./pages/Store/Gracias_Por_Comprar";
import juegoPage from "./data/videogames.json";
import Videojuegos from "./pages/VideoGames/Videojuegos";
import VideojuegosPage from "./pages/VideoGames/VideojuegosPage";
import peliculaPage from "./data/movies.json";
import Peliculas from "./pages/Movies/Peliculas";
import PeliculasPage from "./pages/Movies/peliculasPage";
import MK_1995_Ver from "./pages/Movies/MK_1995_Ver";
import Videos from "./pages/Movies/Videos";
import { Toaster } from 'sonner';
import './App.css'

function App() {


  return (
    <>
      <Router>

        {/* Imágen principal de la web */}
        <NavLink to="/" className="Header">
          <a href="/" className="Header">
            <img className="Header" src={MKHeader}></img>
          </a>
        </NavLink>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/videojuegos" element={<Videojuegos />} />
          <Route path="/Store" element={<StorePage />} />

          <Route
            path="/peliculas/:pagina"
            element={
              <PeliculasPage
                key={peliculaPage.key}
                imgUrl={peliculaPage.imgUrl}
                title={peliculaPage.title}
                argumento={peliculaPage.argumento}
                argumento2={peliculaPage.argumento2}
              />
            }
          />
          <Route
            path="/peliculas/MK_1995/MK_1995_Ver"
            element={<MK_1995_Ver />}
          />

          <Route path="/Store/carrito" element={<Carrito />} />
          <Route
            path="/Store/carrito/gracias"
            element={<Gracias_Por_Comprar />}
          />

          <Route
            path="/videojuegos/:pagina"
            element={
              <VideojuegosPage
                key={juegoPage.key}
                imgUrl={juegoPage.imgUrl}
                title={juegoPage.title}
                argumento={juegoPage.argumento}
                argumento2={juegoPage.argumento2}
              />
            }
          />
        </Routes>

        <Toaster richColors />
        <Videos />
        <Footer />
      </Router>

    </>
  )
}

export default App
