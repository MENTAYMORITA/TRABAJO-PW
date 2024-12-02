import './pedido.css';


import React, { useState, useEffect } from 'react';

function Pedido() {
  const [pedido, setPedido] = useState(null);

  useEffect(() => {
    const ejemploPedido = {
      codigoProducto: 'N°12345678',
      productos: [
        { nombre: 'Producto 1', cantidad: 1, precio: 100 }
      ],
      cliente: {
        nombre: 'Juan Pérez',
        direccion: 'Calle Ficticia 123',
      },
      medioPago: 'Tarjeta de crédito y débito',
      costoEnvio: 0, // Gratis
      totalCompra: 100, // Total sin envío
    };

    setPedido(ejemploPedido);
  }, []);

  return (
    <div className="pedido-page">
      <div className="home-about">
        <div className="about-text">
          <h2>Mis Pedidos</h2>

          {pedido ? (
            <div>
              <h3>Código del Producto: {pedido.codigoProducto}</h3>

              <h4>Productos:</h4>
              <ul>
                {pedido.productos.map((producto, index) => (
                  <li key={index}>
                    {producto.nombre} - Cantidad: {producto.cantidad} - Precio: s/{producto.precio}
                  </li>
                ))}
              </ul>

              <h4>Datos del Cliente:</h4>
              <p><strong>Nombre:</strong> {pedido.cliente.nombre}</p>
              <p><strong>Dirección:</strong> {pedido.cliente.direccion}</p>

              <h4>Resumen de la Compra:</h4>
              <p><strong>Total de Compra:</strong> s/{pedido.totalCompra}</p>
              <p><strong>Medio de Pago:</strong> {pedido.medioPago}</p>
              <p><strong>Total de Compra:</strong> s/{pedido.totalCompra + pedido.costoEnvio}</p>
            </div>
          ) : (
            <p>Cargando información del pedido...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Pedido;
