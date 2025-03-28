import React from 'react'
import fondoProductos from '../../public/img/fondoProductos.png';
import { Products } from '../Components/Products';

const OurProducts = () => {
  return (
    <>
      <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: `url(${fondoProductos})`, height: '50vh' }}>
        <div className="recuadroRes">
          <div className='bg-[#9caf88] p-4 rounded-md border border-white text-center mt-15'>
            <h2 className='fuenteRes text-base md:text-xl lg:text-2xl xl:text-3xl miFuenteBold text-white'>Nuestros Productos</h2>
            <p className="textoRes text-base sm:text-sm md:text-md lg:text-lg xl:text-xl text-white mt-2">Con años de experiencia en el sector, trabajamos con las principales aseguradoras, lo que nos permite ofrecerte opciones confiables y a la medida de tus expectativas. </p>
            <p className="textoRes text-base sm:text-sm md:text-md lg:text-lg xl:text-xl text-white ">  Sabemos que cada caso es único, 
              por eso nos dedicamos a escuchar y entender tus necesidades para encontrar la mejor protección para ti, tu familia o tu empresa</p>
          </div>
        </div>

      </div>
      <div className='flex flex-col items-center gap-10 p-6  miFuenteBold sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl w-full text-black bg-[#EBF4E2]'>
        <Products/>
        
      </div>
    </>
  )
}


export default OurProducts;