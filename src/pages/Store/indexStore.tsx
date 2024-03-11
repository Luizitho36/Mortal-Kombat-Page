import "./indexStore.css";
import { Link } from "react-router-dom";
import productosMK from "../../data/products.json";
import { useAppSelector } from "../../hooks/store";
import Item from "../../components/Item";

export const StorePage = () => {

  const carrito = useAppSelector((state) => state.carrito)

  return (
    <div className="e-Commerce-principal">
      
      {/* Link al carrito */}
      <h2 className="lista-carrito">
        <Link to={"/Store/carrito"} className="carrito">
          Carrito: <span className="contador-carrito">{carrito.length || 0}</span>
        </Link>
      </h2>

      <br></br>
      <br></br>

      {/* Mapeo de la lista de productos */}
      <div className="lista-e-Commerce">
        {productosMK.map((producto) => {
          return <Item key={producto.id} {...producto} />;
        })}
      </div>

      <br></br>

    </div>
  );
};