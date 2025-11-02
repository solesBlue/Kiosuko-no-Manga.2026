import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logoKNM.png"
import { useAppContext } from '../context/AppContext';

function Navbar() {
    const { isAuthenticated, usuario, carrito, cerrarSesion } = useAppContext();

    // const cerrarSesion = () => {
    // setIsAuthenticated(false);
    // setUsuario({ nombre: "", email: "" });
    // navigate("/");
    // };

    const totalItems = carrito.length;

    return(
        <>
            <header className="header">
                <NavLink to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </NavLink>
                <nav className="Navbar">
                    <ul className="nav-links">
                        <li><NavLink  to="/" className={({ isActive }) => isActive ? "active" : ""}><i className="fa-solid fa-house"></i> Inicio</NavLink ></li>
                        <li><NavLink  to="/productos" className={({ isActive }) => isActive ? "active" : ""}><i className="fa-solid fa-cube"></i> Productos</NavLink ></li>
                        <li><NavLink  to="/contacto" className={({ isActive }) => isActive ? "active" : ""}><i className="fa-solid fa-envelope"></i> Contacto</NavLink ></li>
                        {/* <li><NavLink  to="/carritocompras" className={({ isActive }) => isActive ? "active" : ""}><i className="fa-solid fa-cart-shopping"></i> Carrito</NavLink ></li> */}
                        {/* <li><NavLink to="/iniciar-sesion" className={({ isActive }) => isActive ? "active" : ""}><i className="fa-regular fa-circle-user"></i> Log In</NavLink> </li> */}
                        <li >
                            {isAuthenticated ? (
                                <div >
                                <span>Hola, {usuario.nombre} </span>
                                <span>Carrito: ({carrito.length})  </span>
                                <button onClick={cerrarSesion}><i className="fa-solid fa-right-from-bracket"></i> Salir</button>
                                </div>
                            ) : (
                                <NavLink to="/iniciar-sesion" className={({ isActive }) => isActive ? "active" : ""}><i className="fa-regular fa-circle-user"></i> Mi Cuenta</NavLink>
                            )}
                        </li>
                    </ul>
                </nav>
            </header>

        </>
    );

} export default Navbar;