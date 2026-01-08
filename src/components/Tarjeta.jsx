import Contenido from "./Contenido";

function Tarjeta({ titulo, contenido }) {
  return (
    <div>
      <h3>{titulo}</h3>
      <Contenido contenido={contenido} />
    </div>
  );
}

export default Tarjeta;
