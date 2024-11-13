import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {

  const addToCart = () => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.stock += 1; // Incrementa la cantidad si ya está en el carrito
    } else {
      cartItems.push({ ...product, stock: 1 }); // Agrega el producto con cantidad 1 si no está en el carrito
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.dispatchEvent(new Event("storage")); // Emite el evento para actualizar el Header
  };

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
      <button className="add-to-cart" onClick={addToCart}>Añadir al carrito</button>
    </div>
  );
};

export default ProductCard;
