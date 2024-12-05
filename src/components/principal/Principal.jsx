import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import './Principal.css';

const Principal = () => {
  const [searchQuery, setSearchQuery] = useState(''); // Estado para el filtro de búsqueda

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar productos en impacto..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Actualiza el estado cuando se escribe
          className="search-input"
        />
      </div>

      {/* Solo mostrar la imagen si no hay texto en el campo de búsqueda */}
      {!searchQuery && (
        <section>
          <img className="imagenuwu" src="/img/rtx.jpg" alt="Descripción de la imagen" />
        </section>
      )}

      <div className="product-container">
        <div className="product-header">
          <h2 className="product-title">Nuevos Productos</h2>
          <Link to="/ProductList" className="view-all">ver todo &gt;</Link>
        </div>
        <ProductList
          limit={12}
          showAll={false}
          className="two-columns"
          searchQuery={searchQuery} // Pasa el estado de búsqueda como prop
        />
      </div>
    </div>
  );
};

export default Principal;


