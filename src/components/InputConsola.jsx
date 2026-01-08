import { useState } from "react";

function InputConsola() {
  const [texto, setTexto] = useState("");

  const imprimir = () => {
    console.log(texto);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe algo"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={imprimir}>
        Imprimir en consola
      </button>
    </div>
  );
}

export default InputConsola;
