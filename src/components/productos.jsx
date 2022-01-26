import { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

export const productoCategoria = (site, category) => {
    return fetch(`https://api.mercadolibre.com/sites/${site}/search?category=${category}`)
        .then(data => data.json())
}



const productos = ({ product }) => {
    const {title, thumbnail, price, permalink, sold_quantity, available_quantity} = product
 

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
                    ${price}
                    
                </div> 
               
               Vendidos: {sold_quantity} Disponibles:{available_quantity}
                    
            </div> 
            </div>              
                      
            <ListGroup>
             <a style={{background: "red", height: 30, fontSize: 18, color: "white", textDecoration: "none"}} href={permalink}>ver mas</a>
            </ListGroup>   

        </div> 
      
    )}
export default productos;