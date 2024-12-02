import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faUserPlus, faBox, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [cartCount, setCartCount] = useState("");
  const [userRole, setUserRole] = useState(null); // Estado para el rol del usuario
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para la sesión
  const [showAccountDropdown, setShowAccountDropdown] = useState(false); // Estado para el desplegable de Cuenta

  useEffect(() => {


    const handleStorageChange = () => {
    
     

      // Actualiza el estado de sesión y rol del usuario
      const usuario = JSON.parse(localStorage.getItem('usuario'));
      if (usuario) {
        setUserRole(usuario.role);
        setIsLoggedIn(true);
      } else {
        setUserRole(null);
        setIsLoggedIn(false);
      }
    };

    // Configura el estado inicial de sesión y rol del usuario
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario) {
      setUserRole(usuario.role);
      setIsLoggedIn(true);
    }

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('usuario');
    setIsLoggedIn(false);
    setUserRole(null);
    window.location.href = '/login'; 
  };

  return (
    <header>
      <div className="top-bar">
        <div className="logo">
          <a href="/">
            <img
              src="https://www.impacto.com.pe/storage/resource_multimedia/1658267552a_Mesa de trabajo 1.png"
              alt="Impacto - Mayorista de Computo"
            />
          </a>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Buscar productos en IMPACTO..." />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="user-options">
          {isLoggedIn ? (
            userRole === 'user' ? (
              <>
                <a href="/Pedido" className="orders-icon">
                  <FontAwesomeIcon icon={faBox} />
                  <span>Mis Pedidos</span>
                </a>

                <a href="/Carrito" className="cart-icon">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span>Carrito</span>
                
                </a>

                <div
                  className="account-dropdown"
                  onMouseEnter={() => setShowAccountDropdown(true)}
                  onMouseLeave={() => setShowAccountDropdown(false)}
                >
                  <a href="/Contenido/user" className="user-icon">
                    <FontAwesomeIcon icon={faUser} />
                    <span>Cuenta</span>
                  </a>
                  {showAccountDropdown && (
                    <div className="account-dropdown-menu">
                      <a href="/Contenido/user">Perfil</a>
                      <button onClick={handleLogout} className="logout-button">
                        Cerrar Sesión
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : userRole === 'admin' ? (
              <>
                <a href="/Estado" className="user-icon">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Cuenta (Admin) </span>
                </a>
                <button onClick={handleLogout} className="logout-button">
                  Cerrar Sesión
                </button>
              </>
            ) : null
          ) : (
            <>
              <a href="/Login" className="user-icon">
                <FontAwesomeIcon icon={faUser} />
                <span>Inicia Sesión</span>
              </a>
              <a href="/Register" className="register-icon">
                <FontAwesomeIcon icon={faUserPlus} />
                <span>Registrarse</span>
              </a>
              <a href="/Carrito" className="cart-icon">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>Carrito</span>
                <span className="cart-count">{cartCount}</span>
              </a>
            </>
          )}
        </div>
      </div>

      <nav className="main-nav">
        <ul>
          <li className="dropdown">
            <a href="#">Categorías</a>
            <div className="desplegable-categorias">
              <div className="category-group">
                <a href="#">Computadoras y Componentes</a>
                <div className="subcategory-dropdown">
                  <a href="/categoria/Laptops">Laptops</a>
                  <a href="/categoria/Laptops Gaming">Laptops Gaming</a>
                  <a href="/categoria/Procesadores">Procesadores</a>
                  <a href="/categoria/Placas Madre">Placas Madre</a>
                  <a href="/categoria/Tarjetas de Video">Tarjetas de Video</a>
                  <a href="/categoria/Gabinetes">Gabinetes</a>
                  <a href="/categoria/Periféricos y Monitores">Periféricos y Monitores</a>
                </div>
              </div>
              <div className="category-group">
                <a href="#">Periféricos y Monitores</a>
                <div className="subcategory-dropdown">
                  <a href="/categoria/Monitores">Monitores</a>
                  <a href="/categoria/Monitores Gaming">Monitores Gaming</a>
                  <a href="/categoria/Teclados">Teclados</a>
                  <a href="/categoria/Mouses">Mouses</a>
                  <a href="/categoria/Auriculares">Auriculares</a>
                </div>
              </div>
              <div className="category-group">
                <a href="#">Accesorios y Enfriamiento</a>
                <div className="subcategory-dropdown">
                  <a href="/categoria/Accesorios">Accesorios</a>
                  <a href="/categoria/Coolers para Case">Coolers para Case</a>
                  <a href="/categoria/Coolers para Procesador">Coolers para Procesador</a>
                  <a href="/categoria/Sistemas de Enfriamiento Líquido">Sistemas de Enfriamiento Líquido</a>
                </div>
              </div>
            </div>
          </li>
          <li><a href="#" className="rojo">Ofertas</a></li>
          <li><a href="#">Campañas</a></li>
          <li><a href="#">Distribuidores</a></li>
          <li className="dropdown2">
            <a href="#">Contáctanos</a>
            <div className="desplegable-contactanos">
              <a href="/SobreNosotros">Sobre Nosotros</a>
              <a href="/Terms">Términos y condiciones</a>
              <a href="/Privacidad">Política de privacidad</a>
              <a href="/Contacto">Contacto</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
