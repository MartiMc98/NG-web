import React from 'react'

export const CardGrid = () => {
    return (
        <div className='flex justify-between gap-10 p-4'>
            <Card title='Asesoramiento personalizado' text='Nos tomamos el tiempo necesario para entender tus necesidades y ofrecerte las mejores soluciones aseguradoras adaptadas a tu situación.' image='/img/iconoPig.png' />
            <Card title='Experiencia y Profesionalismo' text='Con años de experiencia en el sector, te garantizamos un servicio experto y actualizado para proteger lo que más te importa.' image='/img/iconoManos.png' />
            <Card title='Soporte 24/7' text='Estamos siempre disponibles para ayudarte, brindándote asistencia inmediata en cualquier momento y desde cualquier lugar.' image='/img/iconoMaletin.png' />


        </div>
    )
}



function Card({ title, text, image }) {
    return (
        <div className='text-center  shadow-lg rounded-2xl p-6 border border-white-200'>
            <img
                src={image}
                alt={title}
                className="w-24 h-24 object-cover mx-auto mb-3"
            />
            <h2 className='text-xl miFuenteBold text-[23px]'>{title}</h2>
            <br />
            <p className='miFuente text-[18px]'>{text}</p>

        </div>
    )
}