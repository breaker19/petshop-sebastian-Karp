
import { Cart4 } from 'react-bootstrap-icons';
import {contextoCarrito, CarritoProvider} from '../Context/cartContext'
import {useContext} from 'react'

const CartWidget = () => {

const { cards } = useContext(contextoCarrito)



    return(
       < CarritoProvider>
        <div style={{position: "relative", marginLeft: 6}}>
            <Cart4 style={{width:20, height: 20}} />
            <div style={{color: "#fff", 
            marginLeft: 6, 
            fontWeight: "bold", 
            position: "absolute", 
            left: 6, 
            top: -12, 
            fontSize: "14px", 
            backgroundColor: "#ba000d", 
            paddingTop: "4px", 
            paddingBottom: "4px", 
            paddingLeft: "4px", 
            paddingRight: "4px", 
            borderRadius: "20%"}}>
            {cards.length}</div>
        </div>
        </CarritoProvider>
    )
}

export default CartWidget