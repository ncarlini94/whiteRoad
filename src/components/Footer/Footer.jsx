import styles from './Footer.module.css'

const Footer = () => {

  return (
    <>
            <footer className={`${styles.footer} container-fluid bg-dark  border-top`}>
            <div className={`${styles.container}`}>
            <div className={`${styles.list}`}>
                <ul className={` row`}>
                    <li className=" col"><a href="#" className="nav-link text-light">FAQs</a></li>
                    <li className="col"><a href="#" className="nav-link text-light">About</a></li>
                </ul>
                <p className={`${styles.copyRight} text-light col`}>© 2023 White Road Mecanica</p>
                </div>
                <iframe
                  className={`${styles.googleMap}`}
                  loading="lazy"
                  allowfullscreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed/v1/place?q=Fragata%20H%C3%A9rcules%20%26%20Avenida%20Emilio%20Castro%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires&zoom=16&key=AIzaSyDf6HHT9u8N4EnlMmA2XZgDmeuKFiaWz7c">
                </iframe>
                </div>
            </footer>
    </>
  )
}

export default Footer

