import React from 'react';
import './DetalleCompra.css';

const DetalleCompra = ({ cliente, setCliente }) => {
  const handleContinue = () => {
    if (cliente.nombre && cliente.direccion) {
      alert(`Gracias por tu compra, ${cliente.nombre}. ¡Pedido confirmado!`);
      window.location.href = '/confirmacion'; // Cambiar por la ruta que corresponda
    } else {
      alert('Por favor, completa los datos del cliente antes de continuar.');
    }
  };

  return (
    <div className="detalle-compra">
      <h3>RESUMEN DE COMPRA</h3>
      <p>Productos(4): s/13,996</p>
      <p>Costo de envío: s/29.90</p>
      <p>Descuentos: -s/2,400</p>
      <p><strong>Total de compra:</strong> s/11,196</p>
      <button className="btn-continuar" onClick={handleContinue}>
        Continuar compra
      </button>
    </div>
  );
};

export default DetalleCompra;
