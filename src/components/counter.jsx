import {Button} from 'react-bootstrap';
import React, {useState } from "react";
import { render } from '@testing-library/react';



 const Contador = () => {

const stock= 10;
    const [itemsQty, setitemsQty] = useState(0);
    
    const limiteNegativo = (qty) => {
        if (qty >= 0) {
            setitemsQty(qty)
        }
    }
    const limitestock = (qty) => {
        if (qty <= stock) {
            setitemsQty(qty)
        }
    }
return (
    <div className="App">
        <h4>Prueba de botones</h4>
        <div style={{marginBottom: 10, paddingRight: 20}}>

<Button style={{marginRight: 20}} onClick={() =>limitestock(itemsQty + 1) } variant="danger"> + </Button>

<span>{itemsQty}</span>

<Button style={{marginLeft: 20}} onClick={() =>limiteNegativo(itemsQty - 1) } variant="danger"> - </Button>

</div>

</div>

)


}
export default Contador

