import { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Detalles from './detalles'





const Productos = ({ product }) => {
    const {title, thumbnail, price, sold_quantity, available_quantity,id} = product


console.log(product)
    

    return (
        <div  >
            <div className="col-md-12">
                <div style={{color: "black", weight: "bold", fontSize: 18,height: 80}}>
                {title}
                </div>
           
           
            <Card.Img style={{ marginTop: 10, height: '110px', with: "100%", objectFit: "contain" }} variant="top" src={thumbnail} />

            <div style={{ textAlign: "left" }}>
                <div style={{ height: 40 }}>
                    
                </div>
                <div>
                   Precio final: <span style={{color: "green", fontWeight: "900"}}>${price}</span>
                    
                </div>
                    
            </div> 
            <ListGroup>
             <a style={{background: "red", height: 30, fontSize: 18, color: "white", textDecoration: "none"}} href={id}  element={<Detalles/>}>ver mas</a>
            </ListGroup>  
            </div>              
                      
            

        </div> 
      
    )}
export default Productos;
