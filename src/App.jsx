import Saludo from "./components/Saludo";
import Perfil from "./components/Perfil";
import Tarjeta from "./components/Tarjeta";
import BotonAlerta from "./components/BotonAlerta";
import InputConsola from "./components/InputConsola";
import ListaFrutas from "./components/ListaFrutas";
import Contador from "./components/Contador";
import FormularioNombre from "./components/FormularioNombre";
import ListaTareas from "./components/ListaTareas";
import LoginForm from "./components/LoginForm";
function App() {
  return (
    <div>
      <h1>Dojo React</h1>

            {/* Ejercicio 1 */}
      <Saludo nombre="Oumniya" />

            {/* Ejercicio 2 */}
      <Perfil nombre="Oumniya" edad={21} profesion="Desarrolladora" />
      <Perfil nombre="Carlos" edad={25} profesion="Diseñador" />

            {/* Ejercicio 3 */}
      <Tarjeta
        titulo="React"
        contenido="Librería para construir interfaces"
      />
      <Tarjeta
        titulo="Vite"
        contenido="Herramienta rápida de desarrollo"
      />

            {/* Ejercicio 4 */}
      <BotonAlerta />

            {/* Ejercicio 5 */}
      <InputConsola />

            {/* Ejercicio 6 */}
      <ListaFrutas frutas={["Manzana", "Banana", "Naranja", "Pera"]} />

            {/* Ejercicio 7 */}
      <Contador />

      
            {/* Ejercicio 8 */}
      <FormularioNombre />

            {/* Ejercicio 9 */}
      <ListaTareas
        tareasIniciales={[
          "Aprender React",
          "Practicar useState",
          "Hacer el dojo",
        ]}
      />

             {/* Ejercicio 10 */}
      <LoginForm />
      </div>
  );
}

export default App;
