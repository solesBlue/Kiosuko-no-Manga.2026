import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

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

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
        <h2>Productos</h2>
        <p style={{ fontFamily: "Montserrat, sans-serif", marginLeft: 15 }}>Hacé tu compra de lunes a viernes antes de las 12:00 p.m. y recibí tu pedido el mismo día. </p>  
       

        <ul id="lista-productos">
        {productos.map((producto) => (
            <li key={producto.id}>
                <h3>{producto.name}</h3>
                <img src={producto.avatar} alt={producto.nombre} width="40%" />
                {/* <p><strong>Reseña: </strong>{producto.review}</p>  */}
                <p>{producto.review}</p> 
                <p><strong>Precio: </strong>$ {producto.precio}</p> 
                <Link to={`/productos/${producto.id}`} state={{producto}}><button className="btn btnEnviar">Más detalles</button></Link>
            </li>
        ))}
        </ul>
    </>
);
}