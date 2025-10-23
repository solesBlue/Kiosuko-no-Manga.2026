import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logoKNM.png"
import { useAppContext } from '../context/AppContext';

function Navbar() {
    const { isAuthenticated, usuario, carrito, cerrarSesion } = useAppContext();

    return(
        <>
            <header className="header">
                <img src={logo} alt="Logo" className="logo" />

                <nav className="Navbar">
                    <ul className="nav-links">
                        <li><NavLink  to="/" className={({ isActive }) => isActive ? "active" : ""}><i className="fa-solid fa-house"></i> Inicio</NavLink ></li>
                        <li><NavLink  to="/productos" className={({ isActive }) => isActive ? "active" : ""}><i className="fa-solid fa-cube"></i> Productos</NavLink ></li>
                        <li><NavLink  to="/contacto" className={({ isActive }) => isActive ? "active" : ""}><i className="fa-solid fa-envelope"></i> Contacto</NavLink ></li>
                        {/* <li><NavLink  to="/carrito" className={({ isActive }) => isActive ? "active" : ""}><i className="fa-solid fa-cart-shopping"></i> Pedidos</NavLink ></li> */}
                        {/* <li><NavLink  to="/" className={({ isActive }) => isActive ? "active" : ""}> <i className="fa-solid fa-user"></i> íngresa</NavLink ></li> */}
                    </ul>
                </nav>
            </header>

        </>
    );

} export default Navbar;