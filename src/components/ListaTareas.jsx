import { useState } from "react";
import Tarea from "./Tarea";

function ListaTareas({ tareasIniciales }) {
  const [tareas, setTareas] = useState(tareasIniciales);

  const eliminarTarea = (indexAEliminar) => {
    setTareas(
      tareas.filter((_, index) => index !== indexAEliminar)
    );
  };

  return (
    <ul>
      {tareas.map((tarea, index) => (
        <Tarea
          key={index}
          titulo={tarea}
          onEliminar={() => eliminarTarea(index)}
        />
      ))}
    </ul>
  );
}

export default ListaTareas;
