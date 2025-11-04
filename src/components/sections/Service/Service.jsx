import styles from './Service.module.css'
import { motion } from "framer-motion"
import Spa from './Spa/Spa'

const Servicios = () => {
  return (
    <>
      <div className={`${styles.container} border-top`} id='Service'>
        <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={`${styles.boxTitle}`}
                    transition={{ type: "Spring", delay: 0.16 }}>
                        <h4 className={`${styles.title}`}>Service</h4>
        </motion.div>
        <ul className={`${styles.list}`}>
          <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={`${styles.listItem}`}
                    transition={{ type: "Spring", delay: 0.22 }}>
                        <p><i className={`${styles.icon} bi bi-gear`}></i>Cambio de aceite</p>
          </motion.li>
          <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={`${styles.listItem}`}
                    transition={{ type: "Spring", delay: 0.30 }}>
                        <p><i className={`${styles.icon} bi bi-gear`}></i>Revisión del sistema electrico</p>
          </motion.li>
          <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={`${styles.listItem}`}
                    transition={{ type: "Spring", delay: 0.45 }}>
                        <p><i className={`${styles.icon} bi bi-gear`}></i>Ajuste de valvulas</p>
          </motion.li>
          <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={`${styles.listItem}`}
                    transition={{ type: "Spring", delay: 0.50 }}>
                        <p><i className={`${styles.icon} bi bi-gear`}></i>Limpieza y ajuste de cadena</p>
          </motion.li>
          <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={`${styles.listItem}`}
                    transition={{ type: "Spring", delay: 0.65 }}>
                        <p><i className={`${styles.icon} bi bi-gear`}></i>Cambio de bujia y filtros</p>
          </motion.li>
          <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={`${styles.listItem}`}
                    transition={{ type: "Spring", delay: 0.70 }}>
                        <p><i className={`${styles.icon} bi bi-gear`}></i>Revisión de frenos</p>
          </motion.li>
          <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={`${styles.listItem}`}
                    transition={{ type: "Spring", delay: 0.75 }}>
                        <p><i className={`${styles.icon} bi bi-gear`}></i>Inspeccion del sistema refrigerante</p>
          </motion.li>
          <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={`${styles.listItem}`}
                    transition={{ type: "Spring", delay: 0.80 }}>
                        <p><i className={`${styles.icon} bi bi-gear`}></i>Ajuste y lubricación</p>
          </motion.li>
          <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={`${styles.listItem}`}
                    transition={{ type: "Spring", delay: 0.85 }}>
                        <p><i className={`${styles.icon} bi bi-gear`}></i>Servicio de Spa</p>
          </motion.li>
        </ul>
        <Spa/>
        </div>
    </>
  )
}

export default Servicios