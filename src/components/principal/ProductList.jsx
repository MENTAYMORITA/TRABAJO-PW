import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/Producto.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al cargar los productos:', error));
  }, []);
  
  const displayedProducts = products.slice(0, 12);

  return (
    <div className="product-list">
      <div className="product-header">
        <h2 className="product-title">Nuevos Productos</h2>
        <a href="/productos" className="view-all">ver todo</a>
      </div>
      <div className="product-grid">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
