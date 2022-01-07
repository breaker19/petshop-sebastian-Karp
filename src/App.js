import logo from './logo.svg';
import './App.css';
import NavBar from'./components/NavBar'

function App() {
  return (
    <div className="App">
        <NavBar /> 
      <header className="App-header">
       
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pet shop y veterinaria
        </p>
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
