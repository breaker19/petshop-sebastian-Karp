import { useState, useEffect } from 'react';
import '../App.css';
import { ProductoCategoria } from './apis'
import ItemListContainer from './itemdetailconteiner';



const CategoriaGatos = () => {

  const [products, setProducts] = useState([])
  

  useEffect(() => {
    let categoriaElegida = true
   
    ProductoCategoria("MLA", "MLA1081").then(lista => {
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
export default CategoriaGatos;