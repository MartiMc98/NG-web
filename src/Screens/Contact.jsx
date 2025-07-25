import React, { useState } from 'react'
import fondoContact from '../../public/img/fondoContact.png'
import { Footer } from '../Components/Footer';
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {

  const [form, setForm] = useState({ name: "", email: "", number: "", know: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/send-email", form, {
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
      <motion.div initial={{ opacity: 0 }}      // arranca invisible y un poco más abajo
        whileInView={{ opacity: 1, y: 0 }}   // aparece con fade + subida
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="image w-full bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${fondoContact})`, height: '55vh' }}>
        <h1 className='text-center miFuenteBold sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-white'>Tu opinión es importante, contáctanos y te atenderemos en breve.</h1>

      </motion.div>

      <div className='p-10 text-black bg-[#F7F5F2]'>
        <div className='max-w-md md:max-w-lg lg:max-w-[50vh] mx-auto bg-white p-6 bg-white rounded-md border border-[#6F7F5E]'>
          {sent ? (
            <p className='text-green-600'>¡Mensaje enviado con éxito!</p>
          ) : (

            <motion.form initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }} onSubmit={handleSubmit}>

              <h1 className=' text-center miFuenteBold text-[#6F7F5E] mb-3'>Dejanos tu mensaje: </h1>
              <div>
                <input
                  type="text"
                  id="nombre"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full mt-1 mb-5 p-2 border border-[#6F7F5E] rounded-md focus:ring-2  outline-none"
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
                  className="w-full mt-1 mb-5 p-2 border border-[#6F7F5E] rounded-md focus:ring-2 outline-none"
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
                  className="w-full mt-1 mb-5 p-2 border border-[#6F7F5E] rounded-md focus:ring-2 outline-none"
                  placeholder="Teléfono"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full h-30 mt-1 mb-5  p-2 border border-[#6F7F5E] rounded-md focus:ring-blue-500 "
                  placeholder="Consulta"
                  required
                />
              </div>

              <motion.button
                initial={{ opacity: 0 }}      // arranca invisible y un poco más abajo
                whileInView={{ opacity: 1, y: 0 }}   // aparece con fade + subida
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                type="submit"
                className="w-full bg-[#6F7F5E] text-white miFuenteBold py-2 rounded-lg hover:bg-[#9CAF88] transition"
              >
                Enviar
              </motion.button>

              <h1 className='miFuenteBold text-[#001A57] mt-7 text-center'>O encontranos en: </h1>
              <motion.a
                initial={{ opacity: 0 }}      // arranca invisible y un poco más abajo
                whileInView={{ opacity: 1, y: 0 }}   // aparece con fade + subida
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                href="https://www.instagram.com/ngbrokerseguros/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex justify-center items-center miFuente gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
              >
                <FaInstagram />
                Instagram
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}      // arranca invisible y un poco más abajo
                whileInView={{ opacity: 1, y: 0 }}   // aparece con fade + subida
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                href="https://www.facebook.com/profile.php?id=61575090637921"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center miFuente mt-3 gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                <FaFacebook />
                Facebook
              </motion.a>

              <motion.a
                initial={{ opacity: 0  }}      // arranca invisible y un poco más abajo
                whileInView={{ opacity: 1, y: 0 }}   // aparece con fade + subida
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                href="https://api.whatsapp.com/send/?phone=2604572885&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center miFuente mt-3 gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
              >
                <FaWhatsapp />
                WhatsApp
              </motion.a>

            </motion.form>
          )
          }
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Contact; 