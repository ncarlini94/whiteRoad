import People2 from '../../../assets/people2.png'
import styles from './Contact.module.css'
import { motion } from "framer-motion"

const ContactPage = () => {


  return (
    <>
      <div className={`${styles.container} container-fluid border-top`} id='Contact'>
      <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={`${styles.boxTitle}`}
                    transition={{ type: "Spring", delay: 0.20 }}>
                        <h4 className={`${styles.title}`}>Contactanos</h4>
        </motion.div>
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "Spring", delay: 0.45 }}
          className={`${styles.box} row`}>
        <div className='col-2'>
          <img src={People2} className={`${styles.imgPeople}`}></img>
        </div>
        <div className={`${styles.textBox} col-10 text-light`}>
          <p>
              ¡Programa tu service en un instante!
              <br/>
              <br/>
              En nuestro taller mecánico, simplificamos el proceso de reserva de turnos para tu comodidad.
              Solo necesitas enviar un mensaje por
              <button className='' style={{background:'transparent', border:'none'}}>
                  <a href='https://wa.me/1140273397' style={{color:'rgba(32, 255, 2, 0.945)'}}> WhatsApp </a>
              </button>
              para asegurar la atención que tu moto merece.
              <br/>
              <br/>
              Envíanos tu consulta y nuestro equipo responderá rápidamente para confirmar la disponibilidad y coordinar tu cita en el horario que mejor se ajuste a tu agenda.
          </p>
        </div>
      </motion.div>
      </div>
    </>
  )
}

export default ContactPage