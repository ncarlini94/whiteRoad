import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
            <footer className={`${styles.footer} container-fluid bg-dark`}>
                <ul className="nav justify-content-center border-top pt-2 pb-5">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-light">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-light">About</a></li>
                </ul>
              <p className="text-center text-light">© 2023 White Road Mecanica</p>
            </footer>
    </>
  )
}

export default Footer

