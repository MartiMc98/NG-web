import React from 'react'
import fondoHome from '../../public/img/fondoHome.png'
import { CardGrid } from '../Components/CardGrid';
import { Footer } from '../Components/Footer';
import { motion } from "framer-motion";


const Home = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0, y: 20 }}      // arranca invisible y un poco más abajo
        whileInView={{ opacity: 1, y: 0 }}   // aparece con fade + subida
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }} className="image w-full bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${fondoHome})` }}>
        <h1 className='titHomeResp miFuenteBold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white'>Seguros a tu medida, confianza garantizada</h1>
      </motion.div>
      <div className='flex flex-col items-center p-6 miFuenteBold sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-white bg-[#9caf88]'>

        <h1 className='text-center mb-15 miFuenteBold sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl'>¿Por qué elegirnos?</h1>
        <CardGrid />

      </div>
      <div className="w-full h-96">
        <Footer />
      </div>

    </>

  )
}

export default Home; 