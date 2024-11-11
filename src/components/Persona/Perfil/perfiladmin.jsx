import styles from './perfiladmin.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Perfiladm = () => {
  const modo = 'admin';
  const navigate = useNavigate();
  const [nombre, setNombre] = useState(""); 

  useEffect(() => {
    // Recuperar datos del usuario desde localStorage
    const usuarioJSON = localStorage.getItem('usuario');
    const usuario = JSON.parse(usuarioJSON);

    if (usuario) {
      // Aquí puedes utilizar los datos del usuario en esta página
      const nombreUsuario = usuario.nombres;
      setNombre(nombreUsuario); // Establecemos el nombre en el estado
      console.log('Datos del usuario recuperados desde localStorage:', usuario);
    } else {
      // Si no se encuentra un usuario en localStorage, redirigir al login
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className={styles.container}>
      <main className={styles.xd}>
        <section className={styles.parte2}>
          <div className={styles.titulo2}>
            <span>Bienvenido, {nombre}!</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Perfiladm;
