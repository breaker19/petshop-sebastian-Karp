
import { Cart4 } from 'react-bootstrap-icons';
import {ContextoCarrito, CarritoProvider} from '../Context/cartContext'
import {useContext} from 'react'

const CartWidget = () => {
    const value = useContext(ContextoCarrito);
    console.log(value);
    return (
      <div>
        <Cart4 />
        <div>{value.CantidadCarrito()}</div>
      </div>
    );
  };
   
  export default CartWidget;