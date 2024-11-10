import React from 'react';
import ProductList from './ProductList';
import './Principal.css';

const Principal = () => {
    return (
        <div className="App">
        <section>
          <img className='imagenuwu' src="/img/rtx.jpg" alt="Descripción de la imagen" />
        </section>
        <h2>Nuevos Productos</h2>
        <ProductList />
      </div>

    );
}

export default Principal;