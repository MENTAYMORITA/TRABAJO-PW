import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styles from './page.module.css';
import Input from '../Registro/input1';
import Admins from '../Registro/Admin.json';
import Cliente from '../Registro/Cliente.json';

const Logins = () => {
  const [state, setState] = useState({ usuario: '', contrasena: '' });
  const navigate = useNavigate();

  const mngmtChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const validarLogeo = (e) => {
    e.preventDefault();

    const { usuario, contrasena } = state;
    const admin = Admins.find(
      (admin) => admin.correo === usuario && admin.password === contrasena
    );

    const alumno = Cliente.find(
      (alumno) => alumno.correo === usuario && alumno.password === contrasena
    );

    if (admin) {
      localStorage.setItem('usuario', JSON.stringify(admin));
      navigate('/Contenido/admin'); // Redirige a Contenido como administrador
    } else if (alumno) {
      localStorage.setItem('usuario', JSON.stringify(alumno));
      navigate('/Contenido/alumno'); // Redirige a Contenido como alumno
    } else {
      alert('No coincide la contraseña o usuario o No tiene cuenta');
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
}

export default Logins;
