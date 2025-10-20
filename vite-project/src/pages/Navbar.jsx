import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logoKNM.png"

function Navbar() {
    return(
        <>
            <header className="header">
                <img src={logo} alt="Logo" className="logo" />

                <nav className="Navbar">
                    <ul className="nav-links">
                        <li><NavLink  to="/" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink ></li>
                        <li><NavLink  to="/productos" className={({ isActive }) => isActive ? "active" : ""}>Productos</NavLink ></li>
                        <li><NavLink  to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink ></li>

                    </ul>
                </nav>
            </header>

        </>
    );

} export default Navbar;