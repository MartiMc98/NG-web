import React, { useState } from 'react'
import fondoFormEquipo from '../../public/img/fondoFormEquipo.png'
import { Footer } from '../Components/Footer'
import axios from "axios";
import { motion } from "framer-motion";

export const TeamForm = () => {

    const [form, setForm] = useState({ name: "", email: "", number: "", know: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://ng-web-backend.onrender.com/send-email", form, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setSent(true);
        } catch (error) {
            console.error("Error al enviar:", error);
        }
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}      // arranca invisible y un poco más abajo
                whileInView={{ opacity: 1, y: 0 }}   // aparece con fade + subida
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }} className="bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${fondoFormEquipo})`, height: '60vh' }}>
                <h1 className='titHomeResp miFuenteBold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white'>¿Querés formar parte de nuestro equipo?</h1>

            </motion.div>
            <div className='text-black bg-[#B6C9A1] p-6'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}      // arranca invisible y un poco más abajo
                    whileInView={{ opacity: 1, y: 0 }}   // aparece con fade + subida
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }} className='md:max-w-lg lg:max-w-[50vh] mx-auto bg-white p-6 bg-white rounded-md border border-[#001A57]'>
                    {sent ? (
                        <p className='text-green-600'>¡Mensaje enviado con éxito!</p>
                    ) : (

                        <form onSubmit={handleSubmit}>

                            <h1 className='miFuenteBold text-[#001A57] mb-3'>Completa el formulario y te contactaremos a la brevedad: </h1>
                            <div>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full mt-1 mb-5 p-2 border rounded-lg focus:ring-2  outline-none"
                                    placeholder="Tu nombre"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full mt-1 mb-5 p-2 border rounded-lg focus:ring-2 outline-none"
                                    placeholder="E-mail"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    id="telefono"
                                    name="number"
                                    value={form.number}
                                    onChange={handleChange}
                                    className="w-full mt-1 mb-5 p-2 border rounded-lg focus:ring-2 outline-none"
                                    placeholder="Teléfono"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="textoConociste"
                                    value={form.know}
                                    onChange={handleChange}
                                    name="know"
                                    className="w-full mt-1 mb-5  p-2 border rounded-lg focus:ring-2 outline-none"
                                    placeholder="¿Cómo nos conociste?"
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
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


                    )
                    }
                </motion.div>

            </div>

            <Footer />
        </>
    )
}
