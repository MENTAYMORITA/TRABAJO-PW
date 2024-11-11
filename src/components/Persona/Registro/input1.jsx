
import styles from '../Login/page.module.css'

const Input = ({ inputType, spanText, onChange, name }) =>{ 

    return (
        <div className={styles.div}>
             <label className={styles.span1}>{spanText}</label>
             <input className={styles.usuario} type={inputType} required onChange={onChange} name={name}/>
        </div>
    )

}

export default Input;