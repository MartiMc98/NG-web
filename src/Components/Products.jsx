import React from 'react'
import { Link } from 'react-router-dom'

export const Products = () => {
    return (
        <div className="max-w-5xl mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card
                    title='SEGURO DE AUTO'
                    text='Viaja tranquilo sabiendo que estás cubierto ante cualquier imprevisto. Desde accidentes hasta daños, garantizamos tu seguridad.'
                    image='/img/Seguros/auto.png'
                    link='/formulario/auto'
                />
                <Card
                    title='SEGURO DE HOGAR'
                    text='Tu hogar es tu refugio, y con nuestro Seguro de Hogar, lo tendrás protegido ante robos, daños o emergencias'
                    image='/img/Seguros/hogar.png'
                    link='/formulario/hogar'
                />
                <Card
                    title='SEGURO DE MOTO'
                    text='Tu moto merece estar protegida. Con nuestro Seguro de Moto, estarás cubierto ante accidentes, robos o imprevistos.'
                    image='/img/Seguros/moto.png'
                    link='/formulario/moto'
                />
                <Card
                    title='SEGURO DE ACCIDENTES PERSONALES'
                    text='Con nuestra cobertura, te ofrecemos asistencia médica y compensación por lesiones, para que puedas seguir adelante sin preocupaciones.'
                    image='/img/Seguros/AP.png'
                    link='/formulario/ap'
                />
                <Card
                    title='SEGURO DE MASCOTA'
                    text='Tu mascota merece lo mejor. Con nuestro Seguro de Mascotas, estarás cubierto ante emergencias y gastos veterinarios.'
                    image='/img/Seguros/mascota.png'
                    link='/formulario/mascotas'
                />
                <Card
                    title='SEGURO DE VIAJES'
                    text='Con nuestro Seguro al Viajero, estarás cubierto ante imprevistos, desde cancelaciones hasta emergencias médicas. ¡Viaja seguro, viaja protegido!.'
                    image='/img/Seguros/viajes.png'
                    link='/formulario/viajes'
                />
                <Card
                    title='SEGURO DE SALUD'
                    text='Tu bienestar es lo más importante. Con nuestro Seguro de Salud, tendrás acceso a atención médica de calidad, consultas y emergencias.'
                    image='/img/Seguros/salud.png'
                    link='/formulario/salud'
                />
                <Card
                    title='SEGURO DE BICICLETAS'
                    text='Disfruta de la tranquilidad de saber que, en cualquier imprevisto, tu bici estará protegida y recibirás asistencia 24/7.'
                    image='/img/Seguros/bicicleta.png'
                    link='/formulario/bicicletas'
                />
                <Card
                    title='SEGURO DE INTEGRAL DE COMERCIO '
                    text='Ofrecemos cobertura contra robos, incendios, daños materiales y más, para que tu comercio esté siempre protegido.'
                    image='/img/Seguros/int-comercio.png'
                    link='/formulario/comercios'
                />
                <Card
                    title='SEGURO DE CAUCIÓN'
                    text='No dejes al azar lo que está en juego, con nuestros productos, aseguras el cumplimiento de tus contratos y obligaciones, protegiendo tanto a tu empresa como a tus clientes.'
                    image='/img/Seguros/caucion.png'
                    link='/formulario/caucion'
                />
                <Card
                    title='SEGURO DE EMBARCACIONES'
                    text='Navega tranquilo, con nuestra cobertura, tu inversión estará protegida contra daños, robos y accidentes.'
                    image='/img/Seguros/embarcaciones.png'
                    link='/formulario/embarcaciones'
                />
                <Card
                    title='SEGURO DE SEPELIO'
                    text='Con nuestro seguro de sepelio, garantizas la cobertura total en momentos difíciles, sin que tu familia se preocupe por los gastos.'
                    image='/img/Seguros/sepelio.png'
                    link='/formulario/sepelio'
                />
                    <Card
                    title='SEGURO DE VIDA'
                    text='Garantiza el bienestar de tu familia con una cobertura que les brindará estabilidad y tranquilidad en momentos difíciles. Asegura su futuro y evita preocupaciones económicas cuando más lo necesiten.'
                    image='/img/Seguros/vida.png'
                    link='/formulario/vida'
                />

            </div>

        </div>
    )
}



function Card({ title, text, image, link }) {
    return (
        <div className='text-center flex flex-col justify-between items-center shadow-lg bg-white p-4 border h-full '>
            <img
                src={image}
                alt={title}
                className="mx-auto mb-3 lg:w-[280px] xl:w-[280px] lg:w-[150px] md:w-[250px] imgProducts"
            />
            <h2 className='text-base md:text-xl lg:text-2xl xl:text-2xl miFuenteBold'>{title}</h2>
            <p className='miFuente text-[15px] sm:text-sm md:text-md lg:text-[16px] xl:text-md  mt-2'>{text}</p>
            <div className='mt-auto mb-3 botRes'>

                <Link
                    to={link}
                    className='px-4 py-2 bg-[#D6A77A] text-base sm:text-md md:text-lg lg:text-xl xl:text-[19px] border border-[#D6A77A] rounded-sm miFuenteBold hover:bg-[#A17D5C] hover:text-white transition duration-300'>
                    Solicitar cotización </Link>
            </div>

        </div>
    )
}