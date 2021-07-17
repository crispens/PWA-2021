import Personajes from './components/personajes/Personajes';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <div className="container">
      <Register />
      <Personajes />
    </div>
  );
}

export default App;
