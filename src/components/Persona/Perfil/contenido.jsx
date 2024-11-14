import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './perfiladmin.module.css';
import InputP from './inputperfil';
import BotonP from './botonP';
import { BASE_URL } from "../../../Api/constants";

const Contenido = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('DATOS PERSONALES');
  const [datosPersonales, setDatosPersonales] = useState({
    id: '', 
    nombres: '',
    apellidos: '',
    tipoDocumento: '',
    nroDocumento: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const usuarioJSON = localStorage.getItem('usuario');
    const usuario = JSON.parse(usuarioJSON);
    if (usuario) {
      setDatosPersonales(usuario);
    }
  }, []);

  const handleDatosPersonalesChange = (e) => {
    const { name, value } = e.target;
    setDatosPersonales({ ...datosPersonales, [name]: value });
  };

  const handleGuardarCambios = async () => {
    const camposVacios = Object.values(datosPersonales).some(value => value.trim() === '');
  
    if (camposVacios) {
      alert('Por favor, completa todos los campos antes de guardar los cambios.');
    } else {
      try {
        const response = await axios.put(`${BASE_URL}/user/${datosPersonales.id}`, {
          nombres: datosPersonales.nombres,
          apellidos: datosPersonales.apellidos,
          tipoDocumento: datosPersonales.tipoDocumento,
          nroDocumento: datosPersonales.nroDocumento,
          email: datosPersonales.email,
          password: datosPersonales.password,
        });
        
        localStorage.setItem('usuario', JSON.stringify(response.data));
        
        alert('Datos actualizados correctamente.');
      } catch (error) {
        console.error('Error al actualizar datos:', error);
        alert('Error al actualizar datos. Intente nuevamente.');
      }
    }
  };

  return (
    <article className={styles.articulo1}>
      <div className={styles.recuadro1}>
        
        <div className={styles.tabs}>
          <span
            className={`${styles.tab} ${opcionSeleccionada === 'DATOS PERSONALES' ? styles.tabActivo : ''}`}
            onClick={() => setOpcionSeleccionada('DATOS PERSONALES')}
          >
            DATOS PERSONALES
          </span>
          <span
            className={`${styles.tab} ${opcionSeleccionada === 'CUENTA' ? styles.tabActivo : ''}`}
            onClick={() => setOpcionSeleccionada('CUENTA')}
          >
            CUENTA
          </span>
        </div>
        
        <div className={styles.cuadro2}>
          <form className={styles.formulario}>
            {opcionSeleccionada === 'DATOS PERSONALES' && (
              <>
                <InputP placeholder='Nombres' inputType='text' required name='nombres' value={datosPersonales.nombres || ''} onChange={handleDatosPersonalesChange} />
                <InputP placeholder='Tipo de Documento' inputType='text' name='tipoDocumento' required value={datosPersonales.tipoDocumento || ''} onChange={handleDatosPersonalesChange} />
                <InputP placeholder='Apellidos' inputType='text' required name='apellidos' value={datosPersonales.apellidos || ''} onChange={handleDatosPersonalesChange} />
                <InputP placeholder='Nro de Documento' inputType='text' name='nroDocumento' required value={datosPersonales.nroDocumento || ''} onChange={handleDatosPersonalesChange} />
              </>
            )}
            {opcionSeleccionada === 'CUENTA' && (
              <>
                <InputP placeholder='Correo' inputType='email' name='email' required value={datosPersonales.email || ''} onChange={handleDatosPersonalesChange} />
                <InputP placeholder='Contraseña' inputType='password' name='password' required value={datosPersonales.password || ''} onChange={handleDatosPersonalesChange} />
              </>
            )}
            <BotonP onSaveChanges={handleGuardarCambios} />
          </form>
        </div>
      </div>
    </article>
  );
};

export default Contenido;
