import { useState, useEffect } from 'react';
import '../App.css';
import { ProductoCategoria } from './apis'
import ItemListContainer from './itemdetailconteiner';


const SelectCategory = () => {

  const [products, setProducts] = useState([])
  
  
  useEffect(() => {
 
    let categoriaElegida = true
   
    ProductoCategoria("MLA", "MLA1071").then(lista => {
      if(categoriaElegida) {
        setProducts(lista.results)
      
      }
      
    })
   
    return () => categoriaElegida = true;
  }, [])
  return (
 
    <>
    <div className="App">

    <ItemListContainer products={products} />
    </div>
    </>

 
  )

}


export default SelectCategory;