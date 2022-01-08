import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import img from './logo.png';



export const NavBar = () => {
  return (
<Navbar bg="light" expand="lg">
  <Container fluid>
  <Navbar.Brand href="#home">
      <img
        src= {img}
        width="100%"
        height="100%"
        className="d-inline-block align-top"
        alt="Pet Shop"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Inicio</Nav.Link>
        <Nav.Link href="#action2">Servicios</Nav.Link>
        <NavDropdown title="Productos" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Gatos</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Perros</NavDropdown.Item>
          <NavDropdown.Item href="#action5">Pajaros</NavDropdown.Item>
          <NavDropdown.Item href="#action6">Otros</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
Solo estaba mirando
          </NavDropdown.Item>
        </NavDropdown>

      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Buscar"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
export default NavBar;
