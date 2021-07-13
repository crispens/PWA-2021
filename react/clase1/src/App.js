import Alumno from "./components/Alumno";
import Nav from "./components/layout/Nav";


const App = () => {
  
  return (
    <div>
      <Nav />
      <Alumno nombre = "Daniel" apellido = "Crispens" edad = {29} hobbies = {["bicicletear 🚴‍♀️", "programar 🤓"]}/>
      <Alumno nombre = "Leo" apellido = "Messi" edad = {34} hobbies = {["futbol ⚽"]}/>
    </div>
  );
    
}

export default App;
