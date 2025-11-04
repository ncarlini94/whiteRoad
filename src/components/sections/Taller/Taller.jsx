import styles from './Taller.module.css'


const Taller = () => {



  return (
    <>
        <div className={`${styles.container}`}  id='Taller'>
          <div className={`${styles.boxTitle}`}>
            <h4 className={`${styles.title}`}>Titulo: Taller</h4>
          </div>
          <div className={`${styles.boxContent}`}>
          <div className={`${styles.boxLeft}`}>
            <h4 className={`${styles.boxLeftTitle}`}>Titulo caja: Basico</h4>
            <ul className={`${styles.listLeft}`}>
                <li className={`${styles.itemListLeft}`}>Item 1</li>
                <li className={`${styles.itemListLeft}`}>Item 2</li>
                <li className={`${styles.itemListLeft}`}>Item 3</li>
                <li className={`${styles.itemListLeft}`}>Item 4</li>
                <li className={`${styles.itemListLeft}`}>Item 5</li>
                <li className={`${styles.itemListLeft}`}>Item 6</li>
            </ul>
          </div>
          <div className={`${styles.boxRight}`}>
          <h4 className={`${styles.boxRightTitle}`}>Titulo caja: Completo</h4>
          <ul className={`${styles.listRight}`}>
                <li className={`${styles.itemListLeft}`}>Item 1</li>
                <li className={`${styles.itemListLeft}`}>Item 2</li>
                <li className={`${styles.itemListLeft}`}>Item 3</li>
                <li className={`${styles.itemListLeft}`}>Item 4</li>
                <li className={`${styles.itemListLeft}`}>Item 5</li>
                <li className={`${styles.itemListLeft}`}>Item 6</li>
          </ul>
          </div>
        </div>
        </div>
    </>
  )
}

export default Taller