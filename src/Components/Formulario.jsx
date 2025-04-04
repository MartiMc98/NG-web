import { useParams } from 'react-router-dom';
import { configFormularios } from './configFormularios';
import fondoCotizacion from '../../public/img/fondoFormCotizacion.png'
import { Footer } from './Footer';

const Formulario = () => {
  const { tipo } = useParams();  // Obtiene el parámetro 'tipo' de la URL
  console.log("tipo recibirdo", tipo);
  const campos = configFormularios[tipo] || [];

  return (
    <>
      <div className='relative min-h-[30vh] sm:min-h-[20vh] md:min-h-[30vh]  w-full bg-cover bg-center' style={{ backgroundImage: `url(${fondoCotizacion})` }}>
        <h1 className='flex justify-center mt-25 miFuenteBold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white'>Tu cotización personalizada en minutos</h1>
      </div>
      <div className='gap-10 p-6 text-black bg-[#B6C9A1]'>
        <div className='max-w-md md:max-w-lg lg:max-w-[50vh] mx-auto bg-white mt-10 p-6 bg-white rounded-lg border border-[#001A57]'>
         <h1 className='text-2xl font-bold mb-4 text-[#001A57] text-center'>Formulario para {tipo}</h1>
          <form className='space-y-4'>
            {campos.map((campo, index) => (
              <input
                key={index}
                type={campo.type}
                name={campo.name}
                placeholder={campo.placeholder}
                className='w-full p-3 border rounded-lg'
              />
            ))}
            <button type='submit' className='bg-[#001A57] miFuente w-full text-white  py-2 rounded-lg hover:bg-blue-800 transition duration-300'>Enviar</button>
          </form>
        </div>

      </div>
      <Footer/>
    </>
  );
}

export default Formulario;