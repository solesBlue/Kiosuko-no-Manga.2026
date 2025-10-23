import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DetalleModal from './DetalleModal.jsx';
import Swal from 'sweetalert2';


export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);

    // estado del modal
  const [showModal, setShowModal] = useState(false);
  const [selectedProducto, setSelectedProducto] = useState(null);


  useEffect(() => {
    fetch("https://68e441ef8e116898997b635a.mockapi.io/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        {console.error("Error!,", error)}
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito(prev => [...prev, producto]);
    // alert(`Producto ${producto.name || producto.nombre} agregado al carrito`);
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: `El producto ${producto.name || producto.nombre} ha sido agregado al carrito.`})
  }


  const abrirDetalle = (producto) => {
    setSelectedProducto(producto);
    setShowModal(true);
  }

  const cerrarDetalle = () => {
    setShowModal(false);
    setSelectedProducto(null);
  }

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
        <h2>Productos</h2>
        <p style={{ fontFamily: "Montserrat, sans-serif", marginLeft: 15 }}>Hacé tu compra de lunes a viernes antes de las 12:00 p.m. y recibí tu pedido el mismo día. </p>  
       
        <ul id="lista-productos">
        {/* {productos.map((producto) => ( */}
          {productos.map((producto, index) => (
            // <li key={producto.id}>
            <li key={`${producto.id}-${index}`}>
                <h3>{producto.name}</h3>
                <img src={producto.avatar} alt={producto.nombre} width="40%" />
                <p>{producto.review}</p> 
                <p>Precio:  <strong> ${producto.precio}</strong> </p> 
                <div className="producto_botones"> 
                  <button className="btn btnDetalle" onClick={() => abrirDetalle(producto)}>+ Info</button>
                  {/*comento esta linea que lleva a una pagina para el detalle de producto reemplazado por el modal*/}
                  {/* <Link to={`/productos/${producto.categoria || 'sin-categoria'}/${producto.id}`} state={{producto}}>
                    <button className="btn btnDetalle">Más detalles</button>
                  </Link> */}
                  <button className="btn btnEnviar" onClick={() => agregarAlCarrito(producto)}><i className="fa-solid fa-cart-shopping"></i> Comprar</button>
                </div>
            </li>
        ))}
        </ul>
        <DetalleModal visible={showModal} producto={selectedProducto} onClose={cerrarDetalle} />

    </>
);
}