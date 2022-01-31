import { useState, useEffect } from 'react';
import '../App.css';
import { productoCategoria } from './apis'
import ItemListContainer from './itemdetailconteiner';

const CategoriaPerros = () => {

  const [products, setProducts] = useState([])
  

  useEffect(() => {
    let categoriaElegida = true
   
    productoCategoria("MLA", "MLA1072").then(lista => {
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
export default CategoriaPerros;