import styles from './Spa.module.css'


const Spa = () => {



  return (
    <>
        <div className={`${styles.container}`}  id='Motos'>
          <div className={`${styles.boxTitle}`}>
            <h4 className={`${styles.title}`}>Titulo: Spa</h4>
          </div><div className={`${styles.box}`}>
          <div className={`${styles.boxContent}`}>
          
          <div className={`${styles.boxLeft}`}>
            <p className={`${styles.textBoxLeft}`}>Titulo caja: 1</p>
          </div>
          <div className={`${styles.boxRight}`}>
          <ul className={`${styles.list}`}>
            <li className={`${styles.itemList}`}>item 1</li>
            <li className={`${styles.itemList}`}>item 2</li>
            <li className={`${styles.itemList}`}>item 3</li>
          </ul>
          </div>
        </div>
        <div className={`${styles.boxContent}`}>
          <div className={`${styles.boxLeft}`}>
            <p className={`${styles.textBoxLeft}`}>Titulo caja: 2</p>
          </div>
          <div className={`${styles.boxRight}`}>
          <ul className={`${styles.list}`}>
            <li className={`${styles.itemList}`}>item 1</li>
            <li className={`${styles.itemList}`}>item 2</li>
            <li className={`${styles.itemList}`}>item 3</li>
          </ul>
          </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Spa