import "./Header.css";

const Header = () => {
  return (
    <header>
  
      <div className="top-bar">
        <div className="logo">
        <a href="/">
          <img src="https://www.impacto.com.pe/storage/resource_multimedia/1658267552a_Mesa de trabajo 1.png" alt="Impacto - Mayorista de Computo" />
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
          <a href="#" className="register-icon">
            <i className="fas fa-user-plus"></i> Registrarse
          </a>
          <a href="#" className="orders-icon">
            <i className="fas fa-box"></i> Mis Pedidos
          </a>
          <a href="#" className="cart-icon">
            <i className="fas fa-shopping-cart"></i> Carrito
          </a>
        </div>
      </div>
      

      <nav className="main-nav">
        <ul>
          <li><a href="#">Categorías</a></li>
          <li><a href="#" className="rojo">Ofertas</a></li>
          <li><a href="#">Campañas</a></li>
          <li><a href="#">Distribuidores</a></li>
          <li><a href="#">Contáctanos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
