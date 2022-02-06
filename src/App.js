import './App.css';
import NavBar from'./components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";
import SelectCategory from './components/categoria'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './components/404'
import CategoriaGatos from './components/Gatos'
import Detalles from './components/detalles';
import CategoriaPerros from './components/perros';
import CategoriaJuguetes from './components/juguetes';
import {CarritoProvider} from './Context/cartContext';
import VistaCarrito from './components/carrito'
import SingleProducts from './components/singleProducts'


function App() {
  return (

    <div className="App">
           <CarritoProvider>
        <NavBar/>
        <BrowserRouter>
        
        <Routes>
          <Route path="/" exact element={<SelectCategory/>}/>
          <Route path="CATEGORIA/"  element={<SelectCategory/>}/>
          <Route path="/:id"  element={<Detalles/>}/>
          <Route path="gatos/"  element={<CategoriaGatos/>}/>
          <Route path="perros/"  element={<CategoriaPerros/>}/>
          <Route path="juguetes/"  element={<CategoriaJuguetes/>}/>
          <Route path="*/" element={<Error/>}/>
          <Route path="/error" element={<Error/>}/>
          <Route path="/carrito" element={<VistaCarrito/>}/>
          <Route path="/:id" element={<SingleProducts/>}/>
        
    
        </Routes>
        </BrowserRouter>
       
      <header className="App-header">

        
      </header>
      </CarritoProvider>
    </div>
 
  );
}

 


export default App;
