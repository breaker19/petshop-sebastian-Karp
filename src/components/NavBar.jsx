import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';



export const NavBar = () => {
  return (
<Navbar bg="light" expand={-sm|-md|-lg|-xl}>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link href="#link">Mascotas</Nav.Link>
      <NavDropdown title="Productos" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">gatos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Perros</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Pajaros</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">otros</NavDropdown.Item>
      </NavDropdown>
    </Nav>.
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Buscar</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  )
}
export default NavBar;
