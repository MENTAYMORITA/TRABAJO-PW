import React, { useState } from 'react';
import './Registrar.css';

const Registrar = () => {
  const [formData, setFormData] = useState({
    codigo: '',
    nombre: '',
    descripcion: '',
    categoria: '',
    precioUsd: '',
    precioPen: '',
    stock: 7,
    imagenUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, imagenUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRegister = () => {
    // Aquí podrías enviar `formData` a una API o manejar el registro del producto
    console.log(formData);
    alert("Producto registrado!");
  };

  return (
    <div className="registrar-container">
      <h1 className="registrar-titulo">REGISTRAR PRODUCTO</h1>
      
      <div className="input-group">
        <label>CÓDIGO DE PRODUCTO</label>
        <input type="text" name="codigo" value={formData.codigo} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>NOMBRE</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>DESCRIPCIÓN</label>
        <input type="text" name="descripcion" value={formData.descripcion} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>CATEGORÍA</label>
        <input type="text" name="categoria" value={formData.categoria} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>PRECIO USD</label>
        <input type="number" name="precioUsd" value={formData.precioUsd} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>PRECIO PEN</label>
        <input type="number" name="precioPen" value={formData.precioPen} onChange={handleChange} />
      </div>

      <div className="input-group">
        <label>IMAGEN</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {formData.imagenUrl && <p className="image-url-text">URL de la imagen cargada.</p>}
      </div>

      <div className="input-group">
        <label>STOCK</label>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
        />
      </div>

      <button className="register-button" onClick={handleRegister}>REGISTRAR</button>
    </div>
  );
};

export default Registrar;
