import React from 'react'
import fondoContact from '../../public/img/fondoSobreNosotros.png'
import Carousel from '../Components/Carousel';
import { Footer } from '../Components/Footer';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0 }}      // arranca invisible y un poco más abajo
        whileInView={{ opacity: 1, y: 0 }}   // aparece con fade + subida
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}className="image w-full bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${fondoContact})`, height: '70vh' }}>
        <h1 className='text-center miFuenteBold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white'>Seguridad y confianza para tu futuro.</h1>


      </motion.div>
      <div className='flex flex-col items-center p-4 gap-10 miFuenteBold sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl  text-black  bg-[#EBF4E2]'>
        <Carousel />


        <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} className='bg-[#EBF4E2] max-w-[1100px] mt-20 rounded-lg text-center'>
        <h1 className='miFuenteBold sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl text-[#001A57] '>SOBRE NOSOTROS</h1>
        
          <p className="mt-10 textoRes miFuente text-base sm:text-md md:text-lg lg:text-xl xl:text-2xl">Nuestro equipo está compuesto por expertos comprometidos con tu tranquilidad, brindándote acompañamiento en cada paso del proceso y asegurando que tomes decisiones informadas y con total confianza.</p>
          <p className="textoRes miFuente text-base sm:text-md md:text-lg lg:text-xl xl:text-2xl">En NG, tu seguridad es nuestra prioridad. Confía en nosotros para proteger lo que más valoras.</p>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }}      // arranca invisible y un poco más abajo
        whileInView={{ opacity: 1, y: 0 }}   // aparece con fade + subida
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }} className='miFuenteBold text-base sm:text-md md:text-lg lg:text-xl xl:text-[25px] '>¿Sos PAS y queres formar parte de nuestro equipo?</motion.h1>
        <Link
          to="/teamForm"
          className="px-4 py-2 bg-[#001A57] text-base sm:text-md md:text-lg lg:text-xl xl:text-[25px]  text-white miFuenteBold rounded-lg hover:bg-blue-800 transition duration-300"
        >
          Registrate acá
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs;
/* <div className='bg-[#9caf88] p-4 rounded-md border border-white text-center'>
            <h2 className='fuenteRes text-base md:text-xl lg:text-2xl xl:text-3xl miFuenteBold text-white'>Sobre Nosotros</h2>
            <p className="textoRes text-base sm:text-sm md:text-md lg:text-lg xl:text-xl text-white mt-2">Nuestro equipo está compuesto por expertos comprometidos con tu tranquilidad, brindándote acompañamiento en cada paso del proceso y asegurando que tomes decisiones informadas y con total confianza.</p>
            <p className="textoRes text-base sm:text-sm md:text-md lg:text-lg xl:text-xl text-white mt-2">En NG, tu seguridad es nuestra prioridad. Confía en nosotros para proteger lo que más valoras.</p>
          </div>*/