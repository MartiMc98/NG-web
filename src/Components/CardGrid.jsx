import React from 'react';
import { motion } from "framer-motion";

export const CardGrid = () => {
    return (
        <div className='cardResp gap-10'>
            <Card title='Asesoramiento personalizado' text='Nos tomamos el tiempo necesario para entender tus necesidades y ofrecerte las mejores soluciones aseguradoras adaptadas a tu situación.' image='/img/iconoPig.png' />
            <Card title='Experiencia y Profesionalismo' text='Con años de experiencia en el sector, te garantizamos un servicio experto y actualizado para proteger lo que más te importa.' image='/img/iconoManos.png' />
            <Card title='Soporte 24/7' text='Estamos siempre disponibles para ayudarte, brindándote asistencia inmediata en cualquier momento y desde cualquier lugar.' image='/img/iconoMaletin.png' />

        </div>
    )
}



function Card({ title, text, image }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeIn" }}
            viewport={{ once: true }}
            className='text-center mb-5 shadow-lg rounded-2xl p-6 border border-white-200'>
            <img
                src={image}
                alt={title}
                className="w-20 iconResp mx-auto mb-3"
            />
            <h2 className='titHomeResp text-base md:text-xl lg:text-2xl xl:text-3xl miFuenteBold text-white'>{title}</h2>
            <p className='miFuente textoRes text-base sm:text-sm md:text-md lg:text-lg xl:text-xl text-white mt-2'>{text}</p>

        </motion.div>
    )
}