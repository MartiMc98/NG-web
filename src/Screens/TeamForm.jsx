import React from 'react'
import fondoFormEquipo from '../../public/img/fondoFormEquipo.png'
import { Footer } from '../Components/Footer'

export const TeamForm = () => {
    return (
        <>
            <div className="relative w-full bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${fondoFormEquipo})`, height: '60vh' }}>
                <h1 className='titHomeResp miFuenteBold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white'>¿Querés formar parte de nuestro equipo?</h1>

            </div>
            <div className='gap-10 p-6 text-black bg-[#B6C9A1]'>
                <div className='max-w-md md:max-w-lg lg:max-w-[50vh] mx-auto bg-white mt-10 p-6 bg-white rounded-lg border border-[#001A57]'>

                    <form >
                        <div>
                            <h1 className='miFuenteBold text-[#001A57] mb-3'>Completa el formulario y te contactaremos a la brevedad: </h1>
                        </div>
                        <div>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                className="w-full mt-1 mb-5 p-2 border rounded-lg focus:ring-2  outline-none"
                                placeholder="Tu nombre"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                name="nombre"
                                className="w-full mt-1 mb-5 p-2 border rounded-lg focus:ring-2 outline-none"
                                placeholder="E-mail"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                id="telefono"
                                name="nombre"
                                className="w-full mt-1 mb-5 p-2 border rounded-lg focus:ring-2 outline-none"
                                placeholder="Teléfono"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="textoConociste"
                                name="nombre"
                                className="w-full mt-1 mb-5  p-2 border rounded-lg focus:ring-2 outline-none"
                                placeholder="¿Cómo nos conociste?"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                className="w-full h-30 mt-1 mb-5  p-2 border rounded-lg  focus:ring-blue-500 "
                                placeholder="Consulta"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-5 bg-[#001A57] text-white py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            Enviar
                        </button>

                    </form>
                </div>

            </div>

            <Footer/>
        </>
    )
}
