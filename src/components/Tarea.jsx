function Tarea({ titulo, onEliminar }) {
  return (
    <li>
      {titulo}
      <button onClick={onEliminar} style={{ marginLeft: "8px" }}>
        ❌
      </button>
    </li>
  );
}

export default Tarea;
