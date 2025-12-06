import Banner from '../../assets/Banner.webp'
import Marca from '../../assets/nombreMarca2.png'
import Img1 from '../../assets/img1.jpg'
import Img2 from '../../assets/img2.jpg'
import Img3 from '../../assets/img3.jpg'
import styles from './Homepage.module.css'
import { useEffect } from "react"
import { motion } from "framer-motion"
import Service from '../../components/sections/Service/Service'
import Contact from '../../components/sections/Contact/Contact'



const Homepage = () => {

    useEffect(() => {
        // Preload banner image
        const img = new Image();
        img.src = Banner;
    }, []);






    return (
        <>
        <div className={`${styles.containerTop}`} id='Inicio'>
            <>
                <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.46 }}
                        transition={{ type: "Spring", delay: 0.45 }}
                        className={`${styles.Marca}`}
                        src={Marca}
                        alt='Marca'>
                        </motion.img>
                <img className={`${styles.banner} bg-dark`} src={Banner} alt='Banner de White Road - Taller especializado en mecánica de motos' width="1920" height="1080"/>
            </>
        </div>
        <div className={`${ styles.containerCenter} text-light container-fluid bg-dark`}>
            <div className={`${styles.box1} row`}>
                <div className="col-4">
                <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "Spring", delay: 0.45 }}
                        className={`${styles.Img1}`}
                        key={Img1}
                        id='Img1'
                        src={Img1}
                        alt='Taller especializado en mecánica de motos - White Road'
                        loading="lazy"
                        width="600"
                        height="800">
                    </motion.img>
                </div>
                <div className={`col-8`}>
                <motion.div
                    className={`${styles.textBox1}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ type: "Spring", delay: 0.2 }}>
                    <h5>Tu taller especializado en mecánica de motos</h5>
                    <p>Descubre nuestro taller especializado en brindar servicios de alta calidad para mantener tu moto en su mejor estado. Confía en nuestros expertos para reparaciones y mantenimiento.</p>
                </motion.div>
                    </div>
            </div>

            <div className={`${styles.box2} row`}>
            <div className='col-7'>
                <motion.div
                    className={`${styles.textBox2}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ type: "Spring", delay: 0.2 }}>
                    <h5>Expertos en cuidar tu moto como si fuera nuestra</h5>
                    <p>Somos tu destino confiable para el cuidado y la reparación de motos. Nuestro equipo experto está listo para atender todas las necesidades de tu moto.</p>
                </motion.div>
                </div>
                <div className="col-5">
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "Spring", delay: 0.45 }}
                        className={`${styles.Img2}`}
                        key={Img2}
                        id='Img2'
                        src={Img2}
                        alt='Equipo de expertos cuidando tu moto - White Road'
                        loading="lazy"
                        width="600"
                        height="800">
                    </motion.img>
                </div>
            </div>
            <div className={`${styles.box3} row`}>
                <div className="col-4">
                <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "Spring", delay: 0.45 }}
                        className={`${styles.Img3}`}
                        key={Img3}
                        id='Img3'
                        src={Img3}
                        alt='Profesionales apasionados por las motos - White Road'
                        loading="lazy"
                        width="600"
                        height="800">
                    </motion.img>
                </div>
                <div  className={` col-8`}>
                <motion.div
                    className={`${styles.textBox3}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ type: "Spring", delay: 0.2 }}>
                    <h5>Profesionales apasionados por las motos</h5>
                    <p>En nuestro taller, nos apasiona cuidar de tu moto. Ofrecemos servicios profesionales y atención personalizada para mantener tu vehículo en óptimas condiciones.</p>
                </motion.div>
                </div>
            </div>
            <Service/>
            <Contact/>
        </div>
        </>
    )
}

export default Homepage