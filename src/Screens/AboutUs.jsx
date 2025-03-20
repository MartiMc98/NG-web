import React from 'react'
import fondoSobreNosotros from '../../public/img/fondoSobreNosotros.png'
import Carousel from '../Components/Carousel';

const AboutUs = () => {
  return (
    <>
      <div className="relative  h-[40vh] fixed bg-cover bg-center" style={{ backgroundImage: `url(${fondoSobreNosotros})` }}>
        <div className="absolute top-0 left-50 right-50 bottom-0 flex items-center justify-center">
          <div className='bg-[#9caf88] p-8 w-1/2 rounded-md border border-white  text-center '>
            <h2 className='text-[28px] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl miFuenteBold text-white'>Sobre Nosotros</h2>
            <p className="text-base md:text-md lg:text-lg xl:text-xl text-white mt-2">Nuestro equipo está compuesto por expertos comprometidos con tu tranquilidad, brindándote acompañamiento en cada paso del proceso y asegurando que tomes decisiones informadas y con total confianza.</p>
            <p className='text-base md:text-md lg:text-lg xl:text-xl  text-white'>En NG, tu seguridad es nuestra prioridad. Confía en nosotros para proteger lo que más valoras.</p>
          </div>
        </div>


      </div>
      <div className='flex flex-col items-center p-6 gap-15 miFuenteBold sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl w-full text-black bg-[#EBF4E2]'>
        <Carousel/>


        <h1 className='miFuenteBold mt-30'>NUESTRO EQUIPO</h1>

      </div>
    </>
  )
}

export default AboutUs;