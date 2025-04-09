import { useParams } from 'react-router-dom';
import { configFormularios } from './configFormularios';
import fondoCotizacion from '../../public/img/fondoFormCotizacion.png'
import { Footer } from './Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { modelosPorMarca } from './modelosDeAuto';


const Formulario = () => {
 
  const { tipo } = useParams();  // Obtiene el parámetro 'tipo' de la URL
 
  const campos = configFormularios[tipo] || [];
  const [formData, setFormData] = useState({});
  const [sent, setSent] = useState(false);

  const [camposAuto, setCamposAuto] = useState(configFormularios["auto"]);

useEffect(() => {
  const marcaSeleccionada = formData.marca;
  const nuevosCampos = configFormularios["auto"].map(campoAuto => {
    if (campoAuto.name === "modelo" && marcaSeleccionada) {
      return {
        ...campoAuto,
        options: modelosPorMarca[marcaSeleccionada] || []
      };
    }
    return campoAuto;
  });
  setCamposAuto(nuevosCampos);
}, [formData.marca]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Datos a enviar: ", formData)
    try{
      await axios.post('http://localhost:5000/send-email', {
        tipo, 
        ...formData
      });
      setSent(true);
    } catch(error){
      console.error("Error al enviar:", error);
      
    }
  }


  return (
    <>
      <div className='relative min-h-[30vh] sm:min-h-[20vh] md:min-h-[30vh]  w-full bg-cover bg-center' style={{ backgroundImage: `url(${fondoCotizacion})` }}>
        <h1 className='flex justify-center mt-25 miFuenteBold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white'>Tu cotización personalizada en minutos</h1>
      </div>
      <div className='gap-10 p-6 text-black bg-[#B6C9A1]'>
        <div className='max-w-md md:max-w-lg lg:max-w-[50vh] mx-auto bg-white mt-10 p-6 bg-white rounded-lg border border-[#001A57]'>
         
         { sent ? (
          <p className='text-green-600'>¡Mensaje enviado con éxito!</p>
         ) : (
          <form className='space-y-4' onSubmit={handleSubmit}>
            <h1 className='text-2xl font-bold mb-4 text-[#001A57] text-center'>Formulario para {tipo}</h1>
            {campos.map((campo, index) => (
              campo.type === "select" ? (
                <select 
                key={index}
                name={campo.name}
                value={formData[campo.name] || ''}
                onChange={handleChange}
                className='w-full p-3 border rounded-lg'>
                  <option value="" disabled>{campo.placeholder}</option>
                  {campo.options.map((option,i) => (
                    <option key={i} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
              <input
                key={index}
                type={campo.type}
                name={campo.name}
                placeholder={campo.placeholder}
                value={formData[campo.name] || ''}
                onChange={handleChange}
                className='w-full p-3 border rounded-lg'
              />
              )
            ))}
            <button type='submit' className='bg-[#001A57] miFuente w-full text-white  py-2 rounded-lg hover:bg-blue-800 transition duration-300'>Enviar</button>
          </form>
         )}
        </div>

      </div>
      <Footer/>
    </>
  );
}

export default Formulario;