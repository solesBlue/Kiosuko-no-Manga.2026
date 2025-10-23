import React,{ useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar.jsx'
import Inicio from './pages/Inicio'
import Footer from './pages/Footer.jsx'
import Contacto from './pages/Contacto.jsx'
import Productos from './pages/Productos.jsx';
import ProductoDetalle from './pages/DetalleProductos.jsx';
import { Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'


function App() {
  
  return (
    <AppProvider>
      <>  
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/productos' element={<Productos/>} />
          <Route path='/productos/:id' element={<ProductoDetalle />} />
          <Route path='/productos/:categoria/:id' element={<ProductoDetalle/>} />
          <Route path='/contacto' element={<Contacto/>} />
        </Routes>
        <Footer />
      </>  
      </AppProvider>
  )
}
export default App



function FormularioContacto(){

  const[formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    celular: ''
  });

  const manejarCambio = (evento) => {
    setFormulario({
      ...formulario, // operador de propagación o spread oeprator. Mantiene los valores exsistentes
      [evento.target.name]: evento.target.value, //Actualiza solo el campo que cambio
    });
  };

  //Ejecuta al enviar el formulario
  const manejarEnvio = (evento) => {
    evento.preventDefault();
    console.log('Datos enviados:', formulario);

    //Limpia los campos despues de enviar
    setFormulario({
      nombre: '',
      correo: '',
      celular: ''
    });
  }

  return(
    <>
      <form onSubmit={manejarEnvio} className='formularioContacto'>
        <div className='form-grupo'>
          <label>Apellido y Nombre:</label>
          <input 
            type="text" 
            name="nombre"
            value={formulario.nombre} 
            onChange={manejarCambio} 
            placeholder='Ingrese su Apellido y Nombre'
          />
        </div>  
        <div className='form-grupo'> 
          <label>Correo:</label>
          <input 
            type="email" 
            name="correo"
            value={formulario.correo} 
            onChange={manejarCambio} 
            placeholder='Ingrese su correo'
          />
        </div>
        <div className='form-grupo'>
          <label>Teléfono Celular:</label>
          <input 
            type="text" 
            name="celular"
            value={formulario.celular} 
            onChange={manejarCambio} 
            placeholder='Ingrese su teléfono celular'
          />
        </div>
        <hr />
        <div className='form-grupo-botones'> 
          <button type="submit" className='btn btnEnviar'>Enviar</button>
          <button type="button" onClick={() => setFormulario({nombre: '', correo: '', celular: ''})} className='btn btnCancelar'>Limpiar</button>
        </div>
      </form>

    </>
  );  
} export { FormularioContacto }; 


