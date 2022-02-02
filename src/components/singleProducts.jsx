import { useState } from "react";
import { Button, Card, ListGroup, Col, Container, Row  } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Detalles from './detalles'
import React from 'react'






const SingleProducts = ({ product }) => {
    const {title, description, price, available_quantity,id, pictures, sold_quantity, } = product

    const [itemsQty, setitemsQty] = useState(0);
    
    const setRealStock = (qty) => {
        if (qty <=  available_quantity) {
            setitemsQty(qty)
        } 
    }

    const removeFromStock = (qty) => {
        if (qty >= 0) {
            setitemsQty(qty)
        }
    }
    const [showResults, setShowResults] = React.useState(false)
    const mostrarBoton = () => setShowResults(true)
  
    

    return (
        <div  >
            <Container>
           
                <Row>
                    
            <div className="col-6">
            <div style={{color: "black", weight: "bold", fontSize: 18,height: 80}}>{title} 
            <div>
           

            </div>
            
            </div>
            <Col>
                 <div>
                 {pictures.map(picture => { return (<img src={picture.secure_url}/>)})}
                </div>
            </Col>
            </div> 
                                     


<div className="col-6">

                <h2 className="mb-5">Datos del producto</h2>

<div>
{description}
</div>

                          


            <div style={{ textAlign: "center", marginTop: 20 }}>
                <div>
                   <span style={{color: "black", fontWeight: "600"}}>Precio final:
                   </span> 
                   
                   <span style={{color: "green", fontWeight: "900"}}>${price}</span>
                    
                </div> 
               
               <span style={{color: "black", fontWeight: "700",}}>Vendidos:</span> {sold_quantity} <span style={{color: "black", fontWeight: "700"}}>Disponibles:</span> {available_quantity}
               
<div style={{marginBottom: 20}}>
               <Button style={{marginRight: 20}} onClick={() =>setRealStock(itemsQty + 1) } variant="danger"> + </Button>

              <span>{itemsQty}</span>

              <Button style={{marginLeft: 20}} onClick={() =>removeFromStock(itemsQty - 1) } variant="danger"> - </Button>

</div>

                    
            </div> 
        
            <ListGroup>
         
            
            <div>
                
      <Button  style={{ width: '100%',  background: "red", height: "30", fontSize: "18",color: "white", textDecoration: "none"}} id="Ocultar"  type="submit" value="ver resultados" onClick={mostrarBoton}>Agregar al Carrito </Button>
      { showResults ? <BotonSeguir /> : null }
     
    </div>
            </ListGroup>
                       
                      
            </div>
          
            </Row>
          
            </Container>
        </div> 
      
    )}
    const BotonSeguir = () => (
        <Button style={{ width: '100%',  background: "green", height: "30", fontSize: "18",color: "white", textDecoration: "none", marginTop: "30"}} id="Results" href="/gatos">Seguir comprando </Button>
      ) 
export default SingleProducts;
