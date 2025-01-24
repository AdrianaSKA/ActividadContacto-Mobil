import { Ejercicio5 } from "./components/Ejercicio5";
import { Ejercicio1 } from "./typescript/Ejercicio1"
import { Ejercicio2 } from './typescript/Ejercicio2';
import { Ejercicio3 } from "./typescript/Ejercicio3";
import { Ejercicio4 } from "./typescript/Ejercicio4";

export const App = () => {
  return (
    <div className="mt-2 mx-4">
      <h1>Actividad Contacto Docente</h1>
      <Ejercicio1/>
      <Ejercicio2/>
      <Ejercicio3/>
      <Ejercicio4/>
      <Ejercicio5/>
    </div>
  )
}

export default App
