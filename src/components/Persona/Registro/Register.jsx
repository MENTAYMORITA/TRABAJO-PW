import styles from './registro.module.css';
import Input from './input1';
import React, { useState } from 'react';
import Admins from "./Admin.json";
import Cliente from "./Cliente.json";
import { useNavigate } from 'react-router-dom';

const Registros = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    tipoDocumento: '',
    nroDocumento: '',
    correo: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (key !== 'password' && key !== 'confirmarPassword' && formData[key] === '') {
        alert('Las credenciales no se rellenaron completamente');
        return;
      }
    }

    if (formData.password !== formData.confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const nuevoUsuario = {
      nombres: formData.nombres,
      apellidos: formData.apellidos,
      tipoDocumento: formData.tipoDocumento,
      nroDocumento: formData.nroDocumento,
      correo: formData.correo,
      password: formData.password,
    };

    let tipoUsuario = 'Alumno';
    if (nuevoUsuario.correo.endsWith('@ulima.edu.pe')) {
      tipoUsuario = 'Admin';
    } else if (nuevoUsuario.correo.endsWith('@gmail.com')) {
      tipoUsuario = 'Alumno';
    }

    const data = tipoUsuario === 'Admin' ? Admins : Cliente;
    data.push(nuevoUsuario);
    localStorage.setItem(tipoUsuario, JSON.stringify(data));

    const datosAlmacenados = JSON.parse(localStorage.getItem(tipoUsuario));
    console.log('Datos almacenados en localStorage:', datosAlmacenados);

    setRegistroExitoso(true);

    navigate('/login');  // Redirect to the login page
  };

  return (
    <div className={styles.container}>
      <div className={styles.texto}>   
        <span className={styles.spa1}>Registro de usuario</span>
      </div>
      <form className={styles.section} onSubmit={handleSubmit}>
        <div className={styles.form}>
          <Input spanText="Nombres" inputType="text" value={formData.nombres} onChange={handleInputChange} required name="nombres"/>
          <Input spanText="Apellidos" inputType="text" value={formData.apellidos} onChange={handleInputChange} required name="apellidos"/>
          <Input spanText="Tipo de Documento" inputType="text" value={formData.tipoDocumento} onChange={handleInputChange} required name="tipoDocumento"/>
          <Input spanText="Nro de Documento" inputType="text" value={formData.nroDocumento} onChange={handleInputChange} required name="nroDocumento"/>
      
          <Input spanText="Correo Electronico" inputType="email" value={formData.correo} onChange={handleInputChange} required name="correo"/>
          <Input name="password" spanText="Password" inputType="password" value={formData.password} onChange={handleInputChange} required />
          <Input name="confirmarPassword" spanText="Ingrese Password Nuevamente" inputType="password" value={formData.confirmarPassword} onChange={handleInputChange} required />
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
