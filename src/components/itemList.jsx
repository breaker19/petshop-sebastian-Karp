import Lista from './item';
import { useState } from 'react';


const Cantidades =() => {

        const [products, setProducts] = useState([
      {name: "Antiparasitario", brand: "Feline", stock: 9},
      {name: "Cicatrizante", brand: "Cicatricure", stock: 3},
      {name: "Rascador", brand: "gatos", stock: 1},
      {name: "comida", brand: "Royal Canin", stock: 0}    
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
            
            return <Lista productName={products.name}  brand={products.brand} stock={products.stock}/>
          })}
        </div>   
    
        
      </div>
      
      </>
    );
    
  }

  export default Cantidades; 