import React from "react";
import Carousel from "./Carrusel";

function Inicio() {
    return(
        <>
            <main className="mainInicio"> 
                <h2>Eligí, pagá y recibí tu pedido sin moverte de tu casa.</h2> 
                <p>Hacé tu compra de lunes a viernes antes de las 12:00 p.m. y recibí tu pedido el mismo día.</p> 
            </main> 
            <Carousel />
        </>
    );

}export default Inicio;