import React from 'react'
import fondoSobreNosotros from '../../public/img/fondoSobreNosotros.png'
import Carousel from '../Components/Carousel';
import { Footer } from '../Components/Footer';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
      <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: `url(${fondoSobreNosotros})`, height: '50vh' }}>
        <div className="recuadroRes">
          <div className='bg-[#9caf88] p-4 rounded-md border border-white text-center'>
            <h2 className='fuenteRes text-base md:text-xl lg:text-2xl xl:text-3xl miFuenteBold text-white'>Sobre Nosotros</h2>
            <p className="textoRes text-base sm:text-sm md:text-md lg:text-lg xl:text-xl text-white mt-2">Nuestro equipo está compuesto por expertos comprometidos con tu tranquilidad, brindándote acompañamiento en cada paso del proceso y asegurando que tomes decisiones informadas y con total confianza.</p>
            <p className="textoRes text-base sm:text-sm md:text-md lg:text-lg xl:text-xl text-white mt-2">En NG, tu seguridad es nuestra prioridad. Confía en nosotros para proteger lo que más valoras.</p>
          </div>
        </div>


      </div>
      <div className='flex flex-col items-center gap-10 p-6  miFuenteBold sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl w-full text-black bg-[#EBF4E2]'>
        <Carousel />


        <h1 className='miFuenteBold mt-15'>NUESTRO EQUIPO</h1>

        <div className='fotosResp gap-30'>
          <div className='perfilResp'>
            <img src='/img/foto-prueba.jpg' alt='Imagen 1' className='perfilResp border rounded-full' />
            <h3 className='mt-1 text-center text-base sm:text-sm md:text-md lg:text-lg xl:text-xl'>Lorem Ipsum</h3>
            <p className='miFuente textoRes mb-7 text-center text-base sm:text-sm md:text-md lg:text-lg xl:text-xl'>Lorem Ipsum</p>
          </div>
          <div className='perfilResp'>
            <img src='/img/foto-prueba.jpg' alt='Imagen 2' className='perfilResp border rounded-full' />
            <h3 className='mt-1 text-center text-base sm:text-sm md:text-md lg:text-lg xl:text-xl'>Lorem Ipsum</h3>
            <p className='miFuente textoRes mb-7 text-center text-base sm:text-sm md:text-md lg:text-lg xl:text-xl'>Lorem Ipsum</p>
          </div>
          <div className='perfilResp'>
            <img src='/img/foto-prueba.jpg' alt='Imagen 3' className='perfilResp  border rounded-full' />
            <h3 className='mt-1 text-center text-base sm:text-sm md:text-md lg:text-lg xl:text-xl'>Lorem Ipsum</h3>
            <p className='miFuente textoRes mb-7 text-center text-base sm:text-sm md:text-md lg:text-lg xl:text-xl'>Lorem Ipsum</p>
          </div>
          <div className='perfilResp'>
            <img src='/img/foto-prueba.jpg' alt='Imagen 4' className='perfilResp border rounded-full' />
            <h3 className='mt-1 text-center text-base sm:text-sm md:text-md lg:text-lg xl:text-xl'>Lorem Ipsum</h3>
            <p className='miFuente textoRes mb-7 text-center text-base sm:text-sm md:text-md lg:text-lg xl:text-xl'>Lorem Ipsum</p>
            
          </div>
          
        </div>
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