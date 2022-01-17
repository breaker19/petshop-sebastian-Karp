import logo from './logo.svg';
import gato from './gato.png';
import './App.css';
import NavBar from'./components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import CartWidget from './components/CartWidget';
import Contador from './components/counter';




function App() {
  return (
    <div className="App">
        <NavBar /> 
      
      <header className="App-header">
       
        <img src={gato} className="App-logo" alt="logo" />
        <p>
          Pet shop y veterinaria
        </p>
        <CartWidget/>
        <Contador/>
        <a
          className="App-link"
          href="https://tormenta.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desarrollo by Sebastian Karp
        </a>
        
      </header>
    </div>
  );
}

 


export default App;
