import {Button} from 'react-bootstrap';
import React, {Fragment, useState } from "react";
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


 const Lista = ({ productName,img, brand, stock}) => {


    const [itemsQty, setitemsQty] = useState(0);
    
    const setRealStock = (qty) => {
        if (qty <= stock) {
            setitemsQty(qty)
        } 
    }

    const removeFromStock = (qty) => {
        if (qty >= 0) {
            setitemsQty(qty)
        }
    }

    return(
        <>
        <Container>
        <Row>
              
            <div style={{ marginTop: 30, marginBottom: 5, color: '#e1e1e1', fontSize: '3rem', lineHeight: "22px"}}>

            <span style={{ fontSize: "24px", color: "white"}}>{productName}</span><br></br>{img} <br/><span style={{ fontSize: "20px", color: "red"}}>{brand}</span> 
                <br/><span style={{ fontSize: "1.5rem"}}>Stock restante: {stock - itemsQty}</span>
            </div>
            </Row>
            <div style={{ marginBottom: 10}}>
                <Button onClick={ () => removeFromStock (itemsQty - 1 ) } variant="primary">-</Button>           
                <span style={{  margin: 10, fontSize: "3rem" }}>{itemsQty}</span>
                <Button onClick={ () => setRealStock (itemsQty + 1 ) } variant="primary">+</Button>
            </div>    
            
            
            </Container>    
        </>
    )


}
export default Lista

