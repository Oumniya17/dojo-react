function BotonAlerta() {
  const mostrarAlerta = () => {
    alert("¡Has hecho clic en el botón!");
  };

  return (
    <button onClick={mostrarAlerta}>
      Mostrar alerta
    </button>
  );
}

export default BotonAlerta;
