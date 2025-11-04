import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import BannerImg from '../../assets/banner.png'
import Marca from '../../assets/nombreMarca2.png'
import styles  from './Banner.module.css'
import Logo from '../../assets/logo.png'


const Banner = () => {

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const img = new Image();
        img.onload = () => {
        setIsLoading(false);
        };
        img.src = BannerImg;
    }, []);




  return (
    <>
        {isLoading ? (
            <div className={`${styles.centered} bg-dark`}>
                <div className="spinner-grow text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        ): (
            <>
                <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.46 }}
                        transition={{ type: "Spring", delay: 0.45 }} className={`${styles.Marca}`} src={Marca}>
                        </motion.img>
                <img className={`${styles.banner} bg-dark`} src={BannerImg}/>
                <img className={`${styles.logo}`} src={Logo} alt="Logo" />
            </>
        )}
    </>
  )
}

export default Banner