import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.imageUrl} alt={product.name} className="product-image" />
      </Link>
      <h3>
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </h3>
      <p>MINICÓDIGO: {product.code}</p>
      <p>STOCK: {product.stock}</p>
      <p><strong>{product.priceUSD} / {product.pricePEN}</strong></p>
      <button className="add-to-cart">Añadir al carrito</button>
    </div>
  );
};

export default ProductCard;
