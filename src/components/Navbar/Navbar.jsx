import Logo from '../../assets/logo.png';
import styles from './Navbar.module.css'
import WhatsApp from '../../assets/wpp.png'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';



const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const closeNavbar = () => {
    const navbarToggler = document.getElementById('navbarTogglerDemo01');
    if (navbarToggler.classList.contains('show')) {
      navbarToggler.classList.remove('show');
    }
  };



  return (
    <>
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} navbar navbar-expand-lg sticky-top`}>
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img className={`${styles.logo}`} src={Logo} alt="Logo" />
        </div>
        <button
          className={`${styles.toggler} navbar-toggler`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className=' navbar-toggler'><i className={`${styles.icon} bi bi-list-nested`}></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className={`${styles.navbarLinkContainer}`}>
            <ul className="navbar-nav">
              <li className="nav-item" onClick={closeNavbar}>
                <Link className="nav-link active text-light me-1" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" onClick={closeNavbar}>
                <Link className="nav-link text-light me-1" to="/Servicio">
                  Servicios
                </Link>
              </li>
              <li className="nav-item" onClick={closeNavbar}>
                <Link className="nav-link text-light" to='/Contacto'>
                  Turnos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div className={`${styles.stickyContainer}`}>
    <ul className={`${styles.sticky}`}>
        <li className='bg-dark'>
            <a href='https://wa.me/1123378575' rel="noopener noreferrer" target="blank">
              <img className={`${styles.img}`} src={WhatsApp}/>
            </a>
        </li>
        <li className='bg-dark'>
          <a href='https://www.instagram.com/mecanicawhiteroad/' rel="noopener noreferrer" target="blank">
            <img className={`${styles.img}`} src={Instagram}/>
          </a>
        </li>
        <li className='bg-dark'>
          <a href='https://www.facebook.com/profile.php?id=100082820787803&locale=es_LA' rel="noopener noreferrer" target="blank">
            <img className={`${styles.img}`} src={Facebook}/>
          </a>
        </li>
    </ul>
</div>
</>
  );
};

export default Navbar;
