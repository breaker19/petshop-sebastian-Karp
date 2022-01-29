import './App.css';
import NavBar from'./components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";
import SelectCategory from './components/categoria'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './components/404'


function App() {
  return (
    <div className="App">
        <NavBar /> 
        <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<SelectCategory/>}/>

          <Route path="*" element={<Error/>}/>
        </Routes>
        </BrowserRouter>
      
      <header className="App-header">

        
      </header>
    </div>
  );
}

 


export default App;
