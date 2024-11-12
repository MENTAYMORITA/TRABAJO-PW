import React, { useState, useEffect } from 'react';
import './Carrito.css';

const Carrito = () => {
  const [productos, setProductos] = useState([]);
  const [costoEnvio, setCostoEnvio] = useState(29.90);

  useEffect(() => {
    // Cargar productos desde el archivo JSON
    fetch('/Producto.json')
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error al cargar productos:', error));
  }, []);

  const descuentoTotal = productos.reduce((acc, prod) => {
    const precioNumerico = parseFloat(prod.pricePEN.replace('S/', '').replace(/,/g, ''));
    const descuento = prod.stock > 1 ? precioNumerico * 0.1 : 0; // Ejemplo: descuento del 10% si hay más de un producto
    return acc + descuento;
  }, 0);

  const subtotal = productos.reduce((acc, prod) => {
    const precioNumerico = parseFloat(prod.pricePEN.replace('S/', '').replace(/,/g, ''));
    return acc + (precioNumerico * prod.stock);
  }, 0);

  const total = subtotal + costoEnvio - descuentoTotal;

  const incrementarCantidad = (id) => {
    setProductos((prevProductos) =>
      prevProductos.map((producto) =>
        producto.id === id
          ? { ...producto, stock: producto.stock + 1 }
          : producto
      )
    );
  };

  const decrementarCantidad = (id) => {
    setProductos((prevProductos) =>
      prevProductos.map((producto) =>
        producto.id === id && producto.stock > 1
          ? { ...producto, stock: producto.stock - 1 }
          : producto
      )
    );
  };

  const eliminarProducto = (id) => {
    setProductos((prevProductos) =>
      prevProductos.filter((producto) => producto.id !== id)
    );
  };

  return (
    <div className="carrito-container">
      <div className="carro">
        <h3>Carro ({productos.length} productos)</h3>
        <div className="vendedor">
          <span>Vendido por <strong>Impacto</strong></span>
        </div>
        <div className="seleccionar-todos">
          <input type="checkbox" id="select-all" />
          <label htmlFor="select-all">Seleccionar todos</label>
        </div>
        {productos.map((producto) => (
          <div className="producto" key={producto.id}>
            <img src={producto.imageUrl} alt={producto.name} />
            <div className="info-producto">
              <p className="nombre">{producto.name}</p>
              <p className="marca">{producto.model}</p>
              <div className="precios">
                <span className="precio-actual">{producto.pricePEN}</span>
                <span className="precio-USD">{producto.priceUSD}</span>
              </div>
            </div>
            <div className="acciones">
              <button className="eliminar" onClick={() => eliminarProducto(producto.id)}>ELIMINAR</button>
              <div className="cantidad">
                <button className="decrementar" onClick={() => decrementarCantidad(producto.id)}>-</button>
                <span>{producto.stock}</span>
                <button className="incrementar" onClick={() => incrementarCantidad(producto.id)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="resumen-orden">
        <h3>Resumen de la orden</h3>
        <div className="costo-envio">
          <span>Costo de envío estimado</span>
          <span>S/ {costoEnvio.toFixed(2)}</span>
        </div>
        <div className="productos">
          <span>Productos ({productos.length})</span>
          <span>S/ {subtotal.toFixed(2)}</span>
        </div>
        <div className="descuentos">
          <span>Descuentos</span>
          <span className="descuento-total">- S/ {descuentoTotal.toFixed(2)}</span>
        </div>
        <div className="total">
          <span>Total:</span>
          <span>S/ {total.toFixed(2)}</span>
        </div>
        <button className="continuar-compra">Continuar compra</button>
      </div>
    </div>
  );
};

export default Carrito;
