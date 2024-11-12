
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Enlaces rápidos */}
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Ofertas</a></li>
            <li><a href="#">Contáctanos</a></li>
          </ul>
        </div>

        {/* Información de la empresa */}
        <div className="footer-section">
          <h4>Información</h4>
          <ul>
            <li><a href="/SobreNosotros">Sobre Nosotros</a></li>
            <li><a href="/Terms">Términos y Condiciones</a></li>
            <li><a href="#">Política de Privacidad</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Derechos de autor */}
      <div className="footer-bottom">
        <p>&copy; 2024 Impacto - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
