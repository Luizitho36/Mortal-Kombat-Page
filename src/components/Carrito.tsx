import "./Carrito.css";
import { useAppSelector } from '../hooks/store';
import { useItemActions } from '../hooks/useItemActions';

import { NavLink } from "react-router-dom";

export const Carrito = () => {

  const carrito = useAppSelector((state) => state.carrito)
  const { removeItem } = useItemActions()

  const precioTotal = carrito.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  const handleImpresion = () => {
    print();
  };

  return (
    <>
    {/* Tabla de detalles de los productos seleccionados */}
      <table className="tabla-de-compra">
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id}>
              <div className="datos-item">
              {/* Nombre del producto */}
              <th>{item.name}</th>
              </div>
              <div className="datos-compra">
              {/* Precio del producto */}
              <th className="item-precio">$ {item.price}</th>
              <th>
                {/* Botón de eliminar producto */}
                <button
                  type="button"
                  className="btn-eliminar"
                  onClick={() => removeItem(item.id)}
                >
                  ❌
                </button>
              </th>
              </div>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Cuadro con cantidad de productos y total a pagar */}
      <div className="carrito-container">
        <div>Cantidad de Productos: {carrito.length || 0}</div>
        <div>Total a Pagar: ${precioTotal}</div>
        <a href="/Store/carrito/gracias">
          {/* Botón Comprar */}
          {carrito.length > 0 && (
            <button
            className="boton-comprar"
            onClick={handleImpresion}
            disabled={carrito.length < 1 }
          >
            ¡Comprar!
          </button>
          )}
        </a>

        <br></br>
        {/* Enlace hacia el insdexStore */}
        <NavLink to="/store" className="seguirComprando">
          Seguir Comprando
        </NavLink>
      </div>
    </>
  );
};

export default Carrito;
