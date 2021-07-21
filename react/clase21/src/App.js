import { BrowserRouter, Route } from 'react-router-dom';
import Personajes from './components/personajes/Personajes';
import Register from './components/Register';
import './App.css';
import Login from './components/Login';


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/people" component={Personajes} />
      <Route exact path="/registro" component={Register} />
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
    
  );
}

export default App;
