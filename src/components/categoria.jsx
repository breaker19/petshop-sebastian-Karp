import { useState, useEffect } from 'react';
import '../App.css';
import { productoCategoria } from './ItemDetails'
import ItemListContainer from './itemdetailconteiner';



const SelectCategory = () => {

  const [products, setProducts] = useState([])
  

  useEffect(() => {
    let categoriaElegida = true
   
    productoCategoria("MLA", "MLA1071").then(lista => {
      if(categoriaElegida) {
        setProducts(lista.results)
      
      }
    })
    return () => categoriaElegida = false;
  }, [])

  return (
      <ItemListContainer products={products} />
  );
}
export default SelectCategory;