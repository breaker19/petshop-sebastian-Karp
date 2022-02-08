import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {ContextoCarrito} from '../Context/cartContext'

 
const Cart = () => {
  const value = useContext(ContextoCarrito);
 

 
  return (
    <>
      <h1>Cart</h1>
      <div>Total en el carrito: {value.CantidadCarrito()}</div>
  
    </>
  );
};
 
export default Cart;
 

