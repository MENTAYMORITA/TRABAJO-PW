import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Conecta con Nosotros</h1>
      <div className="map-section">
        <img
          src="https://www.impacto.com.pe/mapa_img/CROQUIS.webp"
          alt="Croquis de ubicación de la tienda"
          className="map-image"
        />
        <button
          className="map-button"
          onClick={() => window.open("https://maps.google.com", "_blank")}
        >
          Ver en Google Maps
        </button>
      </div>
      <div className="contact-buttons">
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <button className="whatsapp-btn">WhatsApp</button>
        </a>
        <a href="tel:+1234567890">
          <button className="phone-btn">Llámanos</button>
        </a>
        <a href="mailto:info@tienda.com">
          <button className="email-btn">Email</button>
        </a>
      </div>
      <div className="opening-hours">
        <h2>Horario de Atención</h2>
        <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
        <p>Sábado: 9:00 AM - 2:00 PM</p>
        <p className="status">¡Estamos abiertos ahora!</p>
      </div>
    </div>
  );
};

export default ContactPage;
