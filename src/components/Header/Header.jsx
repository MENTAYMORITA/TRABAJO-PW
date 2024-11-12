import "./Header.css";

const Header = () => {
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
          <a href="#pruebitanomas" className="cart-icon">
            <i className="fas fa-shopping-cart"></i> Carrito
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
                  <a href="#">Laptops</a>
                  <a href="#">Laptops Gaming</a>
                  <a href="#">Procesadores</a>
                  <a href="#">Placas Madre</a>
                  <a href="#">Tarjetas de Video</a>
                  <a href="#">Gabinetes</a>
                  <a href="#">Periféricos y Monitores</a>
                </div>
              </div>

              {/* Periféricos y Monitores */}
              <div className="category-group">
                <a href="#">Periféricos y Monitores</a>
                <div className="subcategory-dropdown"> 
                 {/* <h3>Periféricos y Monitores</h3>*/}
                  <a href="#">Monitores</a>
                  <a href="#">Monitores Gaming</a>
                  <a href="#">Teclados</a>
                  <a href="#">Mouses</a>
                  <a href="#">Auriculares</a>
                </div>
              </div>

              {/* Accesorios y Enfriamiento */}
              <div className="category-group">
                <a href="#">Accesorios y Enfriamiento</a>
                <div className="subcategory-dropdown">
                 {/* <h3>Accesorios y Enfriamiento</h3>*/}
                  <a href="#">Accesorios</a>
                  <a href="#">Coolers para Case</a>
                  <a href="#">Coolers para Procesador</a>
                  <a href="#">Sistemas de Enfriamiento Líquido</a>
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
              <a href="#">Política de privacidad</a>
              <a href="#">Contacto</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
