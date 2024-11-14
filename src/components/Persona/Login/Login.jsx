import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './page.module.css';
import Input from '../Registro/input1';
import { BASE_URL } from "../../../Api/constants";

const Logins = () => {
  const [state, setState] = useState({ usuario: '', contrasena: '' });
  const navigate = useNavigate();

  const mngmtChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const validarLogeo = async (e) => {
    e.preventDefault();

    const { usuario, contrasena } = state;

    // Determinar si el usuario es un correo o un nombre de usuario
    const isEmail = usuario.includes('@');
    const loginData = {
      password: contrasena,
      ...(isEmail ? { email: usuario } : { username: usuario })
    };

    try {
      // Realizar solicitud al backend
      const response = await axios.post(`${BASE_URL}/user/login`, loginData);
      const { data } = response;

      if (data) {
        // Guardar el usuario en el localStorage según el rol recibido
        localStorage.setItem('usuario', JSON.stringify(data));

        // Redireccionar según el rol del usuario
        if (data.role === 'admin' && data.email.endsWith('@ulima.edu.pe')) {
          navigate('/Estado'); // Página para admin
        } else if (data.role === 'user' && data.email.endsWith('@gmail.com')) {
          navigate('/Contenido/alumno'); // Página para cliente
        } else {
          alert('Rol desconocido. No se puede acceder.');
        }
      } else {
        alert('No coincide la contraseña o usuario o No tiene cuenta');
      }
    } catch (error) {
      console.error(error);
      alert('Error al intentar iniciar sesión. Intente nuevamente.');
    }
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.contenido}>
        <span className={styles.titulo1}>Iniciar Sesión</span>
        <form className={styles.registro} onSubmit={validarLogeo}>
          <Input
            inputType="text"
            spanText="Usuario o Correo"
            name="usuario"
            value={state.usuario}
            onChange={mngmtChange}
          />
          <div className={styles.label2}>
            <Input
              inputType="password"
              spanText="Contraseña"
              name="contrasena"
              value={state.contrasena}
              onChange={mngmtChange}
            />
            <div className={styles.opcion}>
              <span>
                <button
                  className={styles.button1}
                  onClick={() => navigate("/olvidarContra")}
                >
                  Olvidé mi contraseña
                </button>
              </span>
            </div>
          </div>
          <div className={styles.botones}>
            <Link to="/register">
              <button className={styles.button1}>
                Registro usuario
              </button>
            </Link>
            <button className={styles.button2} type="submit">
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Logins;
