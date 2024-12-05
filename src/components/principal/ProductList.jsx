
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';
import { BASE_URL } from '../../Api/constants.js';

const ProductList = ({ limit, showAll = true, className, searchQuery }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al cargar los productos:', error));
  }, []);

  // Filtrar productos por nombre
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) // Compara el nombre del producto con el query
  );

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, limit);

  return (
    <div className={`product-grid ${className}`}>
      {/* Muestra los productos filtrados */}
      {displayedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
