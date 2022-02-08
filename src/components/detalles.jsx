import {  useParams } from 'react-router-dom'
import { getProductDetail, getProductDescription } from "./apis";
import { useEffect, useState, useContext } from 'react';
import Productos from './ItemDetails'
import SingleProducts from './singleProducts'
import {ContextoCarrito, cartprovider} from '../Context/cartContext'
import { useNavigate } from "react-router-dom";



const Detalles=()=>{
    const navigate = useNavigate();
const{ value} = useContext(ContextoCarrito);


    const {id, product, qty}=useParams();
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

    const verCarrito =(description, price, title, itemsQty) => {
        const   newObj = {
           description: description,
           title : title,
           price : price,
           itemsQty : itemsQty,
           total : (function() {
               return product.price *qty
           })
   
           };
           value.addItem(newObj);
          navigate("/carrito")
       }
   




return (
  <>
{descripcion ? <SingleProducts product={descripcion}/>:null}
 
    </>
)

}
export default Detalles