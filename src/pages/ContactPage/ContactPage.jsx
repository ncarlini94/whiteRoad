import People2 from '../../assets/people2.png'
import styles from './ContactPage.module.css'

const ContactPage = () => {


  return (
    <>
      <div className={`${styles.container} container-fluid bg-dark`}>
      <div className={`${styles.box} row`}>
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
                  <a href='https://wa.me/1123378575' style={{color:'rgba(32, 255, 2, 0.945)'}}> WhatsApp </a>
              </button>
              para asegurar la atención que tu moto merece.
              <br/>
              <br/>
              Envíanos tu consulta y nuestro equipo responderá rápidamente para confirmar la disponibilidad y coordinar tu cita en el horario que mejor se ajuste a tu agenda.
          </p>
        </div>
      </div>
      </div>
    </>
  )
}

export default ContactPage