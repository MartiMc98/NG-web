import { useParams } from 'react-router-dom';

const Formulario = () => {
  const { tipo } = useParams();  // Obtiene el parámetro 'tipo' de la URL

  return (
    <div>
      <h1>Formulario para {tipo}</h1>
      <form>
        <input type="text" placeholder={`Formulario para ${tipo}`} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;