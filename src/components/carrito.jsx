import {contextoCarrito} from '../Context/cartContext'
import {useContext} from 'react'



const VistaCarrito = (e) => {
const {CantidadCarrito} = useContext(contextoCarrito)

e.preventDefault()
return (

<div> 

{CantidadCarrito}
</div>
)











}
export default VistaCarrito
