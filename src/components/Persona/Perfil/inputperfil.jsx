import styles from './perfiladmin.module.css'

const InputP = (props) =>{
    return (
        <div className={styles.label} htmlFor="">
            <label className={styles.placeholder} htmlFor="">{props.placeholder}</label>
            <input className={styles.input} type={props.inputType || 'text'} name={props.name} value={props.value}  onChange={props.onChange} required/>
        </div>
    )
}

export default InputP;