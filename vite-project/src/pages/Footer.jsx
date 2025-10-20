import React from "react";

function Footer() {
    return(
        <>
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    <p><strong>Medio de Pago</strong></p> 
                    <div className="medioPago">
                        <i class="fa-brands fa-cc-visa" title="Visa"></i>
                        <i class="fa-brands fa-cc-mastercard" title="Mastercard"></i>
                        <i class="fa-solid fa-landmark" title="Transferencia"></i>
                        <i class="fa-solid fa-money-bill-1" title="Efectivo"></i>
                    </div>
                </div>
                <div className="footer-row">
                    <p><strong>Contacto</strong></p>     
                    <div className="contacto">
                        <p><i class="fa-solid fa-envelope"></i>   kiosukonomanga@gmail.com</p>
                        <p><i class="fa-brands fa-whatsapp"></i>  +54 11 4567-8901</p>
                        <p><i class="fa-solid fa-location-dot"></i>  Cerrito 628, Ciudad Autónoma de Buenos Aires, República Argentina</p>
                    </div>   
                </div>
                <div className="footer-row">
                    <p><strong>Nuestras Redes</strong></p>
                    <div className="redesSociales">
                        <i class="fa-brands fa-instagram" title="Instagram"></i>
                        <i class="fa-brands fa-facebook" title="Facebook"></i>
                        <i class="fa-brands fa-youtube" title="Youtube"></i>
                    </div>
                </div>
            </div>
            <p>&copy; 2025 Kiosuko No Manga. Todos los derechos reservados.</p>

        </footer>
       
        </>
    );

}export default Footer;