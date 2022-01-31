import {  useParams } from 'react-router-dom'
import { getProductDetail, getProductDescription } from "./apis";
import { useEffect, useState } from 'react';
import Productos from './ItemDetails'
import SingleProducts from './singleProducts'

const Detalles=()=>{
    const {id}=useParams();
    const [descripcion, setDescripcion] = useState(null);
    useEffect(() => {
     
        Promise.all([ getProductDetail(id), getProductDescription(id) ])
        .then(results => {
            console.log(results)
            let item = results[0]
            item.description = results[1].plain_text
            setDescripcion(item)

        })
    }, [id]);

return (
  <>
{descripcion ? <SingleProducts product={descripcion}/>:null}
 
    </>
)

}
export default Detalles