// ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/Producto.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedProduct = data.find((p) => p.id === parseInt(productId));
        setProduct(selectedProduct);

        if (selectedProduct) {
          const similar = data.filter(
            (p) => p.category === selectedProduct.category && p.id !== selectedProduct.id
          );
          setSimilarProducts(similar);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar el producto:', error);
        setLoading(false);
      });
  }, [productId]);

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

  if (loading) return <p>Cargando...</p>;
  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div className="product-detail">
      <div className="product-header">
        <h1>{product.name}</h1>
        <p><strong>MINICÓDIGO:</strong> {product.code} <span>|</span> <strong>STOCK:</strong> {product.stock}</p>
      </div>
      <div className="product-detail-container">
        <div className="product-image-section">
          <img src={product.imageUrl} alt={product.name} className="product-detail-image" />
          <div className="product-icons">
            <span>CPU: {product.cpu}</span>
            <span>RAM: {product.memory}</span>
            <span>Almacenamiento: {product.storage}</span>
            <span>Pantalla: {product.screen}</span>
          </div>
        </div>
        <div className="product-info-section">
          <div className="product-pricing">
            <p className="price-cash">Pago en Efectivo: <strong>{product.priceUSD} / {product.pricePEN}</strong></p>
            <p className="price-card">Con Tarjeta (+5%): <strong>${(parseFloat(product.priceUSD.replace('$', '').replace(',', '')) * 1.05).toFixed(2)} / S/{(parseFloat(product.pricePEN.replace('S/', '').replace(',', '')) * 1.05).toFixed(2)}</strong></p>
          </div>
          <button className="add-to-cart-button" onClick={addToCart}>AGREGAR AL CARRITO</button>
          <button className="whatsapp-button">Compra vía WhatsApp</button>
          <div className="product-technical-details">
            <h3>Detalles Técnicos:</h3>
            <ul>
              <li><strong>Modelo:</strong> {product.model}</li>
              <li><strong>Pantalla:</strong> {product.screen}</li>
              <li><strong>CPU:</strong> {product.cpu}</li>
              <li><strong>Memoria:</strong> {product.memory}</li>
              <li><strong>Almacenamiento:</strong> {product.storage}</li>
              <li><strong>Gráficos:</strong> {product.graphics}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="similar-products-section">
        <h3>Productos Similares</h3>
        <div className="similar-products">
          {similarProducts.map((similarProduct) => (
            <div key={similarProduct.id} className="similar-product-card">
              <img src={similarProduct.imageUrl} alt={similarProduct.name} />
              <p>{similarProduct.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
