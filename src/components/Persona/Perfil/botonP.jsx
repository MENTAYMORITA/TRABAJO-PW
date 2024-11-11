import styles from './perfiladmin.module.css';

const BotonP = ({ onSaveChanges }) => {
  const handleSaveClick = () => {
    // Llama a la función onSaveChanges para guardar los cambios
    if (typeof onSaveChanges === 'function') {
      onSaveChanges();
    }
  };

  return (
    <button type='button' className={styles.Button} onClick={handleSaveClick}>
      Guardar
    </button>
  );
};

export default BotonP;