import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import './Principal.css';

const Principal = () => {
  return (
    <div className="App">
      <section>
        <img className="imagenuwu" src="/img/rtx.jpg" alt="Descripción de la imagen" />
      </section>
      <div className="product-container">
        <div className="product-header">
          <h2 className="product-title">Nuevos Productos</h2>
          <Link to="/ProductList" className="view-all">ver todo &gt;</Link>
        </div>
        <ProductList limit={12} showAll={false} className="two-columns" />
      </div>
    </div>
  );
}

export default Principal;
