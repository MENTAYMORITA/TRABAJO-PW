import "./Header.css";
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('cartCount');
    setCartCount(storedCount ? parseInt(storedCount) : 0);

    const handleStorageChange = () => {
      const updatedCount = localStorage.getItem('cartCount');
      setCartCount(updatedCount ? parseInt(updatedCount) : 0);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
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
            <img src="./src/assets/busqueda.png" alt="Imagen" className="search-image" />
          </button>
        </div>
        <div className="user-options">
          <a href="/Login" className="user-icon">
            <img src="./src/assets/usuario.png" alt="Imagen" className="search-image2" />
            <i className="fas fa-user"></i> Inicia Sesión
          </a>
          <a href="/Register" className="register-icon">
            <i className="fas fa-user-plus"></i> Registrarse
          </a>
          <a href="/Pedido" className="orders-icon">
            <i className="fas fa-box"></i> Mis Pedidos
          </a>
          <a href="/Carrito" className="cart-icon">
            <i className="fas fa-shopping-cart"></i> Carrito
            <span className="cart-count">{cartCount}</span>
          </a>
        </div>
      </div>

      <nav className="main-nav">
        <ul>
          <li className="dropdown">
            <a href="#">Categorías</a>
            <div className="desplegable-categorias">
              {/* Computadoras y Componentes */}
              <div className="category-group">
                <a href="#">Computadoras y Componentes</a>
                <div className="subcategory-dropdown">
                {/*  <h3>Computadoras y Componentes</h3>*/}
                  <a href="/categoria/Laptops">Laptops</a>
                  <a href="/categoria/Laptops Gaming">Laptops Gaming</a>
                  <a href="/categoria/Procesadores">Procesadores</a>
                  <a href="/categoria/Placas Madre">Placas Madre</a>
                  <a href="/categoria/Tarjetas de Video">Tarjetas de Video</a>
                  <a href="/categoria/Gabinetes">Gabinetes</a>
                  <a href="/categoria/Periféricos y Monitores">Periféricos y Monitores</a>
                </div>
              </div>

              {/* Periféricos y Monitores */}
              <div className="category-group">
                <a href="#">Periféricos y Monitores</a>
                <div className="subcategory-dropdown"> 
                 {/* <h3>Periféricos y Monitores</h3>*/}
                  <a href="/categoria/Monitores">Monitores</a>
                  <a href="/categoria/Monitores Gaming">Monitores Gaming</a>
                  <a href="/categoria/Teclados">Teclados</a>
                  <a href="/categoria/Mouses">Mouses</a>
                  <a href="/categoria/Auriculares">Auriculares</a>
                </div>
              </div>

              {/* Accesorios y Enfriamiento */}
              <div className="category-group">
                <a href="#">Accesorios y Enfriamiento</a>
                <div className="subcategory-dropdown">
                 {/* <h3>Accesorios y Enfriamiento</h3>*/}
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
              <a href="#">Contacto</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
