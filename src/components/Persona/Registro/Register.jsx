import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './registro.module.css';
import Input from './input1';
import { BASE_URL } from "../../../Api/constants";

const Registros = () => {
  const [formData, setFormData] = useState({
    username: '',
    nombres: '',
    apellidos: '',
    tipoDocumento: '',
    nroDocumento: '',
    email: '',
    password: '',
    confirmarPassword: '',
  });

  const [registroExitoso, setRegistroExitoso] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de campos completos y coincidencia de contraseñas
    for (const key in formData) {
      if (key !== 'confirmarPassword' && formData[key] === '') {
        alert('Por favor completa todos los campos');
        return;
      }
    }

    if (formData.password !== formData.confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Definir rol según el email
    const role = formData.email.endsWith('@ulima.edu.pe') ? 'admin' : 'user';

    // Crear objeto de usuario para enviar al backend
    const nuevoUsuario = {
      username: formData.username,
      nombres: formData.nombres,
      apellidos: formData.apellidos,
      tipoDocumento: formData.tipoDocumento,
      nroDocumento: formData.nroDocumento,
      email: formData.email,
      password: formData.password,
      role,
    };

    try {
      // Enviar datos al backend
      await axios.post(`${BASE_URL}/user/register`, nuevoUsuario);
      setRegistroExitoso(true);
      navigate('/login'); // Redirige a la página de login

    } catch (error) {
      console.error('Error al registrar usuario:', error);
      alert('Error al registrar usuario. Intente nuevamente.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.texto}>   
        <span className={styles.spa1}>Registro de usuario</span>
      </div>
      <form className={styles.section} onSubmit={handleSubmit}>
        <div className={styles.form}>
          <Input spanText="Username" inputType="text" value={formData.username} onChange={handleInputChange} required name="username"/>
          <Input spanText="Nombres" inputType="text" value={formData.nombres} onChange={handleInputChange} required name="nombres"/>
          <Input spanText="Apellidos" inputType="text" value={formData.apellidos} onChange={handleInputChange} required name="apellidos"/>
          <Input spanText="Tipo de Documento" inputType="text" value={formData.tipoDocumento} onChange={handleInputChange} required name="tipoDocumento"/>
          <Input spanText="Nro de Documento" inputType="text" value={formData.nroDocumento} onChange={handleInputChange} required name="nroDocumento"/>
          <Input spanText="Correo Electrónico" inputType="email" value={formData.email} onChange={handleInputChange} required name="email"/>
          <Input name="password" spanText="Contraseña" inputType="password" value={formData.password} onChange={handleInputChange} required />
          <Input name="confirmarPassword" spanText="Confirmar Contraseña" inputType="password" value={formData.confirmarPassword} onChange={handleInputChange} required />
          {registroExitoso && (
            <div className={styles.exitoso}>Usuario registrado correctamente.</div>
          )}
          <div className={styles.boton}>
            <button type="submit">Registrar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registros;
