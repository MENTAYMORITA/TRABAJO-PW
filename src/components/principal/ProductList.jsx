import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/Producto.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error al obtener los datos: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al cargar los productos:', error));
  }, []);
  

  return (
    <div className="product-list">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
