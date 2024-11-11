import styles from './peralum.module.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Perfilalum = () => {
  const modo = 'alumno';
  const navigate = useNavigate();

  useEffect(() => {
    // Recuperar datos del usuario desde localStorage
    const usuarioJSON = localStorage.getItem('usuario');
    const usuario = JSON.parse(usuarioJSON);

    if (usuario) {
      // Aquí puedes utilizar los datos del usuario en esta página
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
            <span>Mi Perfil</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Perfilalum;
