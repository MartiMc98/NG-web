import { useParams } from 'react-router-dom';
import { configFormularios } from './configFormularios';
import fondoCotizacion from '../../public/img/fondoFormCotizacion.png';
import { Footer } from './Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { modelosPorMarca } from './modelosDeAuto';


const Formulario = () => {
  const { tipo } = useParams();  // Obtiene el parámetro 'tipo' de la URL
  const campos = configFormularios[tipo] || [];
  const [formData, setFormData] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      if (name === "marca") {
        return {
          ...prevData,
          [name]: value,
          modelo: "" // Reinicia modelo si cambia la marca
        };
      }
      return {
        ...prevData,
        [name]: value
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Datos a enviar: ", formData);
    try {
      await axios.post('https://ng-web-backend.onrender.com/send-email', {
        tipo,
        ...formData
      });
      setSent(true);
    } catch (error) {
      console.error("Error al enviar:", error);
    }
  };

  return (
    <>
      <div
        className='relative min-h-[30vh] sm:min-h-[20vh] md:min-h-[30vh] w-full bg-cover bg-center'
        style={{ backgroundImage: `url(${fondoCotizacion})` }}
      >
        <h1 className='flex justify-center mt-25 miFuenteBold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white'>
          Tu cotización personalizada en minutos
        </h1>
      </div>

      <div className='text-black bg-[#F7F5F2] p-6'>
        <div className='max-w-md md:max-w-lg lg:max-w-[60vh] mx-auto bg-white p-6 rounded-md border border-[#6F7F5E]'>
          {sent ? (
            <p className='text-green-600'>¡Mensaje enviado con éxito!</p>
          ) : (
            <form className='space-y-4' onSubmit={handleSubmit}>
              <h1 className='text-3xl font-bold mb-4 text-[#6F7F5E] text-center'>
                Formulario para {tipo}
              </h1>
              {campos.map((campo, index) => {
                let options = campo.options;
                

                // Si el campo es "modelo", usá los modelos correspondientes a la marca seleccionada
                if (campo.name === "modelo" && formData["marca"]) {
                  options = modelosPorMarca[formData["marca"]] || [];
                }
                options = options || [];

                return (
                  <div key={index} className="flex flex-col gap-1">
                    <label htmlFor={campo.name} className="text-sm font-medium miFuenteBold text-[#6F7F5E]">
                      {campo.label || campo.placeholder}
                    </label>
                    {campo.type === "select" ? (
                      <select
                        id={campo.name}
                        name={campo.name}
                        value={formData[campo.name] || ''}
                        onChange={handleChange}
                        className='w-full p-3 border border-[#6F7F5E] rounded-sm'
                        required={campo.required}
                      >
                        <option value="" disabled>{campo.placeholder}</option>
                        {options.map((option, i) => (
                          <option key={i} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={campo.name}
                        type={campo.type}
                        name={campo.name}
                        required={campo.required}
                        value={formData[campo.name] || ''}
                        onChange={handleChange}
                        className='w-full p-3 border border-[#6F7F5E] rounded-sm'
                        placeholder={campo.type === 'date' ? undefined : campo.placeholder}
                      />
                    )}
                  </div>
                );
                
              })}
              <button
                type='submit'
                className='bg-[#6F7F5E] miFuenteBold w-full text-white py-2 rounded-lg hover:bg-[#9CAF88] transition duration-300'
              >
                Enviar
              </button>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Formulario;

/* if(campo.name === "version" && formData["marca"] && formData["modelo"]){
                  options = versionesPorModelo[formData["marca"]] && 
                            versionesPorModelo[formData["marca"]][formData["modelo"]] || [];
                }*/