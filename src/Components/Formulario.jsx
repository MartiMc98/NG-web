import { useParams } from 'react-router-dom';
import { configFormularios } from './configFormularios';

const Formulario = () => {
  const { tipo } = useParams();  // Obtiene el parámetro 'tipo' de la URL
  console.log("tipo recibirdo", tipo);
  const campos = configFormularios[tipo] || [];

  return (
    <div className='p-6 rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold mb-4'>Formulario para {tipo}</h1>
      <form className='space-y-4'>
        { campos.map((campo, index) => (
          <input 
          key={index}
          type={campo.type}
          name={campo.name}
          placeholder={campo.placeholder}
          className='w-full p-2 border rounded-lg'
          />
        )) }
        <button type='submit' className='bg-blue-500 text-white px-4 py-4 rounded-lg'>Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;