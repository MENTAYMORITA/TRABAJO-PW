import React from 'react';
import './DetallePago.css';

const DetallePago = () => {
  return (
    <div className="contenedor">
      <h2>Datos de la persona</h2>
      <div className="campo">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" placeholder="Nombre" />
      </div>
      <div className="campo">
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" placeholder="Apellido" />
      </div>
      <div className="campo">
        <label htmlFor="dni">DNI:</label>
        <input type="text" id="dni" placeholder="DNI" />
      </div>
      <div className="campo">
        <label htmlFor="direccion">Dirección:</label>
        <input type="text" id="direccion" placeholder="Dirección" />
      </div>

      <h2>Datos de la tarjeta</h2>
      <div className="radio-group">
        <label>
          <input type="radio" name="tipo-tarjeta" value="visa" /> Visa
        </label>
        <label>
          <input type="radio" name="tipo-tarjeta" value="mastercard" /> Mastercard
        </label>
        <label>
          <input type="radio" name="tipo-tarjeta" value="amex" /> American Express
        </label>
      </div>
      <div className="campo">
        <label htmlFor="nombre-tarjeta">Nombre:</label>
        <input type="text" id="nombre-tarjeta" placeholder="Nombre en la tarjeta" />
      </div>
      <div className="campo">
        <label htmlFor="apellido-tarjeta">Apellido:</label>
        <input type="text" id="apellido-tarjeta" placeholder="Apellido en la tarjeta" />
      </div>
      <div className="input-group">
        <div className="campo">
          <label htmlFor="numero-tarjeta">Número de tarjeta:</label>
          <input type="text" id="numero-tarjeta" placeholder="Número de tarjeta" />
        </div>
        <div className="campo">
          <label htmlFor="cvv">CVV:</label>
          <input type="number" id="cvv" placeholder="CVV" />
        </div>
      </div>
      <div className="campo">
        <label htmlFor="fecha-vencimiento">Fecha de vencimiento:</label>
        <input type="date" id="fecha-vencimiento" />
      </div>

      <button className="boton-pagar">Pagar</button>
    </div>
  );
};

export default DetallePago;
