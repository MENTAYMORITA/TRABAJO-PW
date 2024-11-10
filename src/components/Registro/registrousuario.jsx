import styles from './registro.module.css'
import Input from './input1'
import React, { useState } from 'react';
import Link from 'next/link'
import Admins from "./Admin.json";
import Alumnos from "./Alumnos.json"
import { useRouter } from 'next/router';


const Registro = () =>{
  
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

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validar que los campos se hayan completado
    for (const key in formData) {
      if (key !== 'password' && key !== 'confirmarPassword' && formData[key] === '') {
        alert('Las credenciales no se rellenaron completamente');
        return;
      }
    }
  
    // Verificar que las contraseñas coincidan
    if (formData.password !== formData.confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
  
    // Crear un nuevo objeto de usuario
    const nuevoUsuario = {
      nombres: formData.nombres,
      apellidos: formData.apellidos,
      tipoDocumento: formData.tipoDocumento,
      nroDocumento: formData.nroDocumento,
      correo: formData.correo,
      password: formData.password,
    };
  
    // Obtener el tipo de usuario (Admin o Alumno) según tus necesidades
    let tipoUsuario = 'Alumno'; // Cambia a 'Admin' si es un administrador
    // Por defecto, asumimos que es un alumno
    if (nuevoUsuario.correo.endsWith('@ulima.edu.pe')) {
      tipoUsuario = 'Admin'; // Si el correo termina con '@ulima.edu.pe', es un administrador
    } else if (nuevoUsuario.correo.endsWith('@gmail.com')) {
      tipoUsuario = 'Alumno'; // Si el correo termina con '@gmail.com', es un alumno
    }
  
    // Acceder a los datos del archivo JSON correspondiente
    const data = tipoUsuario === 'Admin' ? Admins : Alumnos;
  
    // Agregar el nuevo usuario a la lista de usuarios
    data.push(nuevoUsuario);
  
    // Actualizar los datos en el almacenamiento local
    localStorage.setItem(tipoUsuario, JSON.stringify(data));

    const datosAlmacenados = JSON.parse(localStorage.getItem(tipoUsuario));
    console.log('Datos almacenados en localStorage:', datosAlmacenados);
  
    // Muestra un mensaje de registro exitoso
    setRegistroExitoso(true);

    router.push('/login');
  
    
  };
  

    return (
    <div className={styles.container}>
    <div className={styles.texto}>   
        <span className={styles.spa1}>Sistema de reserva de libros</span>
        <span className={styles.spa2}>Registro de usuario</span>
    </div>
        <form className={styles.section} onSubmit={handleSubmit}>
            <div className={styles.form} >
            <span className={styles.spa3}>Datos Personales</span>
            <Input spanText="Nombres" inputType="text" value={formData.nombres} onChange={handleInputChange} required name="nombres"/>
            <Input spanText="Apellidos" inputType="text" value={formData.apellidos} onChange={handleInputChange} required name ="apellidos"/>
            <Input spanText="Tipo de Documento" inputType="text" value={formData.tipoDocumento} onChange={handleInputChange} required  name= "tipoDocumento"/>
            <Input spanText="Nro de Documento" inputType="text" value={formData.nroDocumento} onChange={handleInputChange} required name= "nroDocumento"/>
            </div>
            <div className={styles.form} >
            <span className={styles.spa3}>Datos de la cuenta</span>
            <Input spanText="Correo Electronico" inputType="email" value={formData.correoElectronico} onChange={handleInputChange} required name= "correo"/>
            <Input name="password" spanText="Password" inputType="password" value={formData.password} onChange={handleInputChange} required />
            <Input name="confirmarPassword" spanText="Ingrese Password Nuevamente" inputType="password" value={formData.confirmarPassword} onChange={handleInputChange} required />
            {registroExitoso && (
              <div className={styles.exitoso}>Usuario registrado correctamente.</div>
            )}
            <div className={styles.boton}>
              <Link href="./login"><button type="submit" onClick={handleSubmit}>Registrar</button></Link>
            </div>
            </div>
          </form>
    </div>
    )
}

export default Registro;