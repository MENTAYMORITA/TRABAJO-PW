import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './perfiladmin.module.css';
import InputP from './inputperfil';
import BotonP from './botonP';

const Contenido = () => {
  const { modo } = useParams(); // Obtén el modo desde los parámetros de la URL
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('DATOS PERSONALES');
  const [datosPersonales, setDatosPersonales] = useState({
    nombres: '',
    tipoDocumento: '',
    apellidos: '',
    nroDocumento: '',
    correo: '',
    password: '',
    color: '',
    prefijo: '',
    idioma: '',
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

  const handleGuardarCambios = () => {
    const camposVacios = Object.values(datosPersonales).some(value => value.trim() === '');
  
    if (camposVacios) {
      alert('Por favor, completa todos los campos antes de guardar los cambios.');
    } else {
      const usuarioActualizado = { ...datosPersonales };
      localStorage.setItem('usuario', JSON.stringify(usuarioActualizado));
      console.log('Datos de usuario actualizados en localStorage:', usuarioActualizado);
    }
  };

  return (
    <article className={styles.articulo1}>
      <div className={styles.recuadro1}>
        <div className={styles.cuadro2}>
          <form className={styles.formulario}>
            {opcionSeleccionada === 'DATOS PERSONALES' && (
              <>
                <InputP placeholder='Nombres' inputType='text' required name='nombres' value={datosPersonales.nombres || ''} onChange={handleDatosPersonalesChange} />
                <InputP placeholder='Tipo de Documento' inputType='text' name='tipoDocumento' required value={datosPersonales.tipoDocumento || ''} onChange={handleDatosPersonalesChange} />
                <InputP placeholder='Apellidos' inputType='text' required name='apellidos' value={datosPersonales.apellidos || ''} onChange={handleDatosPersonalesChange} />
                <InputP placeholder='Nro de Documento' inputType='text' name='nroDocumento' required value={datosPersonales.nroDocumento || ''} onChange={handleDatosPersonalesChange} />
                <BotonP onSaveChanges={handleGuardarCambios} />
              </>
            )}
            {modo === 'admin' && opcionSeleccionada === 'CUENTA' && (
              <>
                <InputP placeholder='Correo' inputType='email' name='correo' required value={datosPersonales.correo || ''} onChange={handleDatosPersonalesChange} />
                <InputP placeholder='Password' inputType='password' name='password' required value={datosPersonales.password || ''} onChange={handleDatosPersonalesChange} />
                <BotonP onSaveChanges={handleGuardarCambios} />
              </>
            )}
            {modo === 'admin' && opcionSeleccionada === 'PREFERENCIAS' && (
              <>
                <InputP placeholder='Color' inputType='text' name='color' required value={datosPersonales.color || ''} onChange={handleDatosPersonalesChange} />
                <InputP placeholder='Prefijo' inputType='text' name='prefijo' required value={datosPersonales.prefijo || ''} onChange={handleDatosPersonalesChange} />
                <InputP placeholder='Idioma' inputType='text' name='idioma' required value={datosPersonales.idioma || ''} onChange={handleDatosPersonalesChange} />
                <BotonP onSaveChanges={handleGuardarCambios} />
              </>
            )}
          </form>
        </div>
      </div>
    </article>
  );
};

export default Contenido;
