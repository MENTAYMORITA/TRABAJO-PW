import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-header">
        <h1>Conoce más de Impacto</h1>
        <p>Conoce nuestra misión, visión y los valores que nos guían.</p>
      </header>
      
      <section className="mission-vision">
        <div className="section">
          <h2>Misión</h2>
          <p>
          Proporcionar soluciones tecnológicas personalizadas, orientadas al 
          cliente y posicionarnos como un aliado confiable, guiando decisiones 
          óptimas a través de la innovación constante además de un servicio 
          efectivo y eficiente.
          </p>
        </div>
        <div className="section">
          <h2>Visión</h2>
          <p>
          Ser el referente líder del mercado en equipos de cómputo, 
          satisfaciendo las necesidades de nuestros clientes con confiabilidad, 
          expertiz , innovación y un compromiso constante con la calidad. 
          Buscamos expandir nuestra presencia nacional, construir relaciones 
          duraderas basadas en confianza y transformar la interacción con la 
          tecnología para asegurar el máximo potencial de cada cliente.
          </p>
        </div>
      </section>

      <section className="our-values">
        <h2>Valores</h2>
        <ul>
          <li>Innovación constante</li>
          <li>Responsabilidad social</li>
          <li>Compromiso con la calidad</li>
          <li>Respeto por el medio ambiente</li>
          <li>Colaboración y trabajo en equipo</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contáctanos</h2>
        <p>Si deseas saber más sobre nosotros, no dudes en ponerte en contacto con nuestro equipo.</p>
        <button className="contact-btn">Enviar mensaje</button>
      </section>
    </div>
  );
};

export default AboutUs;
