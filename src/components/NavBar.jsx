import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import img from './logo.png';
import CartWidget from '../components/cart'
import SingleProducts from './singleProducts'

export const NavBar = () => {

  return (


<Navbar bg="light" expand="lg" addItem >
  <Container fluid>

 <Navbar.Brand href="/">
      <img  src= {img}  width="100%" height="100%"className="d-inline-block align-top"
        alt="Pet Shop"/></Navbar.Brand>

    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav 
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link href="/juguetes">Juguetes</Nav.Link>
        <Nav.Link href="/error">404</Nav.Link>
        <NavDropdown title="Productos" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/Gatos">Gatos</NavDropdown.Item>
          <NavDropdown.Item href="/Perros">Perros</NavDropdown.Item>
          <SingleProducts/>

          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
Solo estaba mirando
          </NavDropdown.Item>
        </NavDropdown>

      </Nav>
      <div style={{ paddingRight: '20px' }}>  

      <Nav.Link href="/carrito"><CartWidget /></Nav.Link>
      </div>
  

    </Navbar.Collapse>
  </Container>
</Navbar>


  )
  
}
export default NavBar;
