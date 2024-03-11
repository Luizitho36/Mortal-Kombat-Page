import "./Item.css";
import { useItemActions } from '../hooks/useItemActions';
// import { useAppSelector } from '../hooks/store';

export default function Item({ id, name, price, imgUrl }) {

  // const carrito = useAppSelector((state) => state.carrito)
  const { addItem } = useItemActions()

  // const idContador = (id) => {
  //   return carrito.find((item) => item.id === id)?.acumId || 0;
  // };

  // const contadorPorItem = idContador(id);
  return (

    // Detalles de cada producto
    <div className="caja-item">

      {/* Nombre, imágen y precio */}
      <div>{name}</div>
      <img className="imgURL" src={imgUrl} />
      <div className="precio-item">${price}</div>

      {/* Boton de Agregar al Carrito */}
      <button className="boton-agregar" onClick={() => addItem({name, price})}>
        Agregar Al Carrito
      </button>


      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&display=swap');
      </style>
    </div>
  );
}
