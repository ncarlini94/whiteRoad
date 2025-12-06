import Logo from '../../assets/logo.png';
import styles from './Navbar.module.css'
import WhatsApp from '../../assets/wpp.png'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
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
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} navbar navbar-expand-lg sticky-lg-top fixed-bottom`} role="navigation" aria-label="Navegación principal">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img className={`${styles.logo}`} src={Logo} alt="Logo White Road - Taller de motos" title="White Road" />
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
          <span className=' navbar-toggler' aria-hidden="true"><i className={`${styles.icon} bi bi-list-nested`}></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className={`${styles.navbarLinkContainer}`}>
            <ul className="navbar-nav">
              <li className={`${styles.navItem} nav-item`} onClick={closeNavbar}>
                <a className="nav-link active text-light me-1" aria-current="page" href="#Inicio">
                  Inicio
                </a>
              </li>
              <li className={`${styles.navItem} nav-item`} onClick={closeNavbar}>
                <a className="nav-link text-light me-1" href="#Service">
                  Servicios
                </a>
              </li>
              <li className={`${styles.navItem} nav-item`} onClick={closeNavbar}>
                <a className="nav-link text-light" href='#Contact'>
                  Turnos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div className={`${styles.stickyContainer}`} role="complementary" aria-label="Enlaces de redes sociales">
    <ul className={`${styles.sticky}`}>
        <li className='bg-dark'>
            <a href='https://wa.me/1140273397' rel="noopener noreferrer" target="blank" aria-label="Enviar mensaje por WhatsApp">
              <img className={`${styles.img}`} src={WhatsApp} alt='WhatsApp'/>
            </a>
        </li>
        <li className='bg-dark'>
          <a href='https://www.instagram.com/mecanicawhiteroad/' rel="noopener noreferrer" target="blank" aria-label="Visitar perfil de Instagram">
            <img className={`${styles.img}`} src={Instagram} alt='Instagram'/>
          </a>
        </li>
        <li className='bg-dark'>
          <a href='https://www.facebook.com/profile.php?id=100082820787803&locale=es_LA' rel="noopener noreferrer" target="blank" aria-label="Visitar página de Facebook">
            <img className={`${styles.img}`} src={Facebook} alt='Facebook'/>
          </a>
        </li>
    </ul>
</div>
</>
  );
};

export default Navbar;
