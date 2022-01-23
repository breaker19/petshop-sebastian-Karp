import Lista from './item';
import { useState } from 'react';
import Comida from './royal.png';
import rascador from './rascador.jpg';
import smaug from './smaug.jpeg';
import smaugysawi from './smaugysawi.jpeg';

const Cantidades =() => {

        const [products, setProducts] = useState([
      {name: "Antiparasitario", img: <img src={smaug} width="200" height="300"/>, brand: "Feline", stock: 9},
      {name: "Cicatrizante", img: <img src={smaugysawi} width="300" height="300"/>, brand: "Cicatricure", stock: 3},
      {name: "Rascador",  img: <img src={rascador} width="200" height="300"/>, brand: "gatos", stock: 1},
      {name: "comida", img: <img src={Comida} width="200" height="300"/>, brand: "Royal Canin", stock: 0}     
    ])
    const promesa = new Promise (resolve  => {
      setTimeout(() =>{
        resolve(products);},2000)});
        promesa.then(result => {
          console.log(result)
        });
    return (
      <>
      <div className="App">
      
        <h2>Mi carrito</h2>
       
        
        <div  style={{ marginBottom: 10, display: 'flex'}}>
          {products.map((products) => {
            
            return <Lista productName={products.name} img={products.img}  brand={products.brand} stock={products.stock}/>
          })}
        </div>   
    
        
      </div>
      
      </>
    );
    
  }

  export default Cantidades; 