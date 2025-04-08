import React from 'react'
import MapComponent from './MapComponent'

export const Footer = () => {
    return (
        <div>
            <MapComponent />
            <div className='flex justify-center footerResp'>
                <div>
                    <img src='/img/SSN-Logo.png' alt='Logo SSN' className="logossnResp max-w-xs md:max-w-sm lg:max-w-md xl:max-w-xl h-auto mx-5" />
                    <h5 className='text-[#08448C] mx-2 md:mx-8 lg:mx-8 textoRes textoFooterResp text-base sm:text-sm md:text-md lg:text-lg xl:text-xl'>www.argentina.gob.ar/ssn</h5>
                    <h5 className='text-[#08448C] mx-2 md:mx-8 lg:mx-8 textoRes textoFooterResp text-base sm:text-sm md:text-md lg:text-lg xl:text-xl'>0800-666-8400</h5>
                    <h5 className='text-[#08448C] mx-2 md:mx-8 lg:mx-8 textoRes textoFooterResp text-base sm:text-sm md:text-md lg:text-lg xl:text-xl'>Número de matrícula: 1416</h5>
                </div>
                <div className='p-6'>
                    <div className='flex items-center m-2'>
                        <img src='/img/icono-map.png' alt='icono mapa' className="w-7 h-7 mx-3" />
                        <h5 className='textoRes text-base sm:text-sm md:text-md lg:text-lg xl:text-xl'>Ballofet 1074 Local 1, San Rafael</h5>
                    </div>
                    <div className='flex items-center m-2'>
                        <img src='/img/icono-tel.png' alt='icono mapa' className="w-7 h-7 mx-3" />
                        <h5 className='textoRes text-base sm:text-sm md:text-md lg:text-lg xl:text-xl'>888888888</h5>
                    </div>
                    <div className='flex items-center m-2'>
                    <img src='/img/icono-sobre.png' alt='icono mapa' className="w-7 h-7 mx-3" />
                    <h5 className='textoRes text-base sm:text-sm md:text-md lg:text-lg xl:text-xl'>info@ngbrokerseguros.com</h5>
                    </div>

                </div>

            </div>
        </div>
    )
}
/*text-[#08448C] textoRes text-base sm:text-sm md:text-md lg:text-lg xl:text-xl*/


/*miFuente mx-2 md:mx-8 lg:mx-8 text-[#08448C] text-[20px] md:text-[14px] lg:text-text-[16px] xl:text-lg --texto azul*/
/*miFuente text-[20px] md:text-[14px] lg:text-text-[16px] xl:text-lg --texto negro*/