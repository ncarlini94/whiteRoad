import styles from './Motos.module.css'


const Motos = () => {



  return (
    <>
        <div className={`${styles.container}`}  id='Motos'>
          <div className={`${styles.boxTitle}`}>
            <h4 className={`${styles.title}`}>Titulo: Motos</h4>
          </div>
          <div className={`${styles.boxContent}`}>
          <div className={`${styles.boxLeft}`}>
            <p className={`${styles.textBoxLeft}`}>Titulo caja: Compra y Venta</p>
          </div>
          <div className={`${styles.boxRight}`}>
          <ul className={`${styles.list}`}>
            <li className={`${styles.itemList}`}>item :Compra</li>
            <li className={`${styles.itemList}`}>item :Venta</li>
            <li className={`${styles.itemList}`}>item :Otros</li>
          </ul>
          </div>
        </div>
        </div>
    </>
  )
}

export default Motos