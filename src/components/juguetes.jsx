import { useState, useEffect } from 'react';
import '../App.css';
import { productoCategoria } from './apis'
import ItemListContainer from './itemdetailconteiner';

const CategoriaJuguetes = () => {

  const [products, setProducts] = useState([])
  

  useEffect(() => {
    let categoriaElegida = true
   
    productoCategoria("MLA", "MLA1084").then(lista => {
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
export default CategoriaJuguetes;