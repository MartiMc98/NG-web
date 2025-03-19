import React from 'react'
import fondoHome from '../../public/img/fondoHome.png'
import { CardGrid } from '../Components/CardGrid';
import { Footer } from '../Components/Footer';


const Home = () => {
  return (
    <>
      <div className="w-full h-screen bg-cover bg-center flex justify-center items-center text-white"
        style={{ backgroundImage: `url(${fondoHome})` }}>
        <h1 className='miFuente sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Seguros a tu medida, &nbsp; </h1> <h1 className='miFuenteBold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#B6C9A1] text-center'> confianza garantizada</h1>
      </div>
      <div className='flex flex-col items-center p-6 gap-15 miFuenteBold sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl w-full text-white bg-[#9caf88]'>

        <h1 className='text-center mb-6 miFuenteBold sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl'>¿Por qué elegirnos?</h1>
        <CardGrid/>

      </div>
      <div className="w-full h-96">
        <Footer/>
      </div>
    
    </>

  )
}

export default Home; 