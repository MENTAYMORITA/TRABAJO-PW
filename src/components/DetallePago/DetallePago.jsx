import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './DetallePago.css';

const DetallePago = () => {
  const [formValues, setFormValues] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    direccion: '',
    tipoTarjeta: '',
    nombreTarjeta: '',
    apellidoTarjeta: '',
    numeroTarjeta: '',
    cvv: '',
    fechaVencimiento: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const manejarInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const manejarPago = () => {
    const errores = {};
    
    // Validar cada campo
    if (!formValues.nombre) errores.nombre = 'El nombre es obligatorio';
    if (!formValues.apellido) errores.apellido = 'El apellido es obligatorio';
    if (!formValues.dni) errores.dni = 'El DNI es obligatorio';
    if (!formValues.direccion) errores.direccion = 'La dirección es obligatoria';
    if (!formValues.tipoTarjeta) errores.tipoTarjeta = 'Debe seleccionar un tipo de tarjeta';
    if (!formValues.nombreTarjeta) errores.nombreTarjeta = 'El nombre en la tarjeta es obligatorio';
    if (!formValues.apellidoTarjeta) errores.apellidoTarjeta = 'El apellido en la tarjeta es obligatorio';
    if (!formValues.numeroTarjeta) errores.numeroTarjeta = 'El número de tarjeta es obligatorio';
    if (!formValues.cvv) errores.cvv = 'El CVV es obligatorio';
    if (!formValues.fechaVencimiento) errores.fechaVencimiento = 'La fecha de vencimiento es obligatoria';

    setFormErrors(errores);

    // Si no hay errores, proceder con el pago
    if (Object.keys(errores).length === 0) {
      navigate('/Login'); // Redirige a la página de login
    }
  };

  return (
    <div className="contenedor detalle-pago">
      <h2>Datos de la persona</h2>
      <div className="campo">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          placeholder="Nombre"
          value={formValues.nombre}
          onChange={manejarInputChange}
        />
        {formErrors.nombre && <p className="error">{formErrors.nombre}</p>}
      </div>
      <div className="campo">
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          placeholder="Apellido"
          value={formValues.apellido}
          onChange={manejarInputChange}
        />
        {formErrors.apellido && <p className="error">{formErrors.apellido}</p>}
      </div>
      <div className="campo">
        <label htmlFor="dni">DNI:</label>
        <input
          type="text"
          id="dni"
          placeholder="DNI"
          value={formValues.dni}
          onChange={manejarInputChange}
        />
        {formErrors.dni && <p className="error">{formErrors.dni}</p>}
      </div>
      <div className="campo">
        <label htmlFor="direccion">Dirección:</label>
        <input
          type="text"
          id="direccion"
          placeholder="Dirección"
          value={formValues.direccion}
          onChange={manejarInputChange}
        />
        {formErrors.direccion && <p className="error">{formErrors.direccion}</p>}
      </div>

      <h2>Datos de la tarjeta</h2>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="tipo-tarjeta"
            value="visa"
            onChange={(e) => setFormValues({ ...formValues, tipoTarjeta: e.target.value })}
          />{' '}
          Visa
        </label>
        <label>
          <input
            type="radio"
            name="tipo-tarjeta"
            value="mastercard"
            onChange={(e) => setFormValues({ ...formValues, tipoTarjeta: e.target.value })}
          />{' '}
          Mastercard
        </label>
        <label>
          <input
            type="radio"
            name="tipo-tarjeta"
            value="amex"
            onChange={(e) => setFormValues({ ...formValues, tipoTarjeta: e.target.value })}
          />{' '}
          American Express
        </label>
        {formErrors.tipoTarjeta && <p className="error">{formErrors.tipoTarjeta}</p>}
      </div>
      <div className="campo">
        <label htmlFor="nombreTarjeta">Nombre:</label>
        <input
          type="text"
          id="nombreTarjeta"
          placeholder="Nombre en la tarjeta"
          value={formValues.nombreTarjeta}
          onChange={manejarInputChange}
        />
        {formErrors.nombreTarjeta && <p className="error">{formErrors.nombreTarjeta}</p>}
      </div>
      <div className="campo">
        <label htmlFor="apellidoTarjeta">Apellido:</label>
        <input
          type="text"
          id="apellidoTarjeta"
          placeholder="Apellido en la tarjeta"
          value={formValues.apellidoTarjeta}
          onChange={manejarInputChange}
        />
        {formErrors.apellidoTarjeta && <p className="error">{formErrors.apellidoTarjeta}</p>}
      </div>
      <div className="input-group">
        <div className="campo">
          <label htmlFor="numeroTarjeta">Número de tarjeta:</label>
          <input
            type="text"
            id="numeroTarjeta"
            placeholder="Número de tarjeta"
            value={formValues.numeroTarjeta}
            onChange={manejarInputChange}
          />
          {formErrors.numeroTarjeta && <p className="error">{formErrors.numeroTarjeta}</p>}
        </div>
        <div className="campo">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="number"
            id="cvv"
            placeholder="CVV"
            value={formValues.cvv}
            onChange={manejarInputChange}
          />
          {formErrors.cvv && <p className="error">{formErrors.cvv}</p>}
        </div>
      </div>
      <div className="campo">
        <label htmlFor="fechaVencimiento">Fecha de vencimiento:</label>
        <input
          type="date"
          id="fechaVencimiento"
          value={formValues.fechaVencimiento}
          onChange={manejarInputChange}
        />
        {formErrors.fechaVencimiento && <p className="error">{formErrors.fechaVencimiento}</p>}
      </div>

      <button className="boton-pagar" onClick={manejarPago}>
        Pagar
      </button>
    </div>
  );
};

export default DetallePago;
