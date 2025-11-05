import styles from './Footer.module.css'

const Footer = () => {

  return (
    <>
            <footer className={`${styles.footer} container-fluid bg-dark  border-top`}>
            <div className={`${styles.container}`}>
              <div className={`${styles.list}`}>
                <ul className={` row`}>
                    <li className=" col"><a href="#" className="nav-link text-light"></a></li>
                    <li className="col"><a href="#" className="nav-link text-light"></a></li>
                </ul>
                <p className={`${styles.copyRight} text-light col`}>© 2025 White Road Mecanica | <a style={{textDecoration:'none'}} href='https://nicolascarlini.netlify.app/'>Nico</a></p>
              </div>
                <iframe
                  className={`${styles.googleMap}`}
                  loading="lazy"
                  allowfullscreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.362778178734!2d-58.49559172521035!3d-34.645540059706434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9a6c0022165%3A0xce71742389db6410!2sAv.%20Bruix%204790%2C%20C1407IKZ%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1762294406493!5m2!1ses!2sar">
                </iframe>
            </div>
            </footer>
    </>
  )
}
export default Footer

