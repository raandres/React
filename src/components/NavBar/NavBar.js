import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarRB from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from '../CardWidget/CardWidget';

const NavBar = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarRB expand="lg" className="bg-body-tertiary">
          <Container>
            <NavbarRB.Brand href="#home">NAVBAR</NavbarRB.Brand>
            <NavbarRB.Toggle aria-controls="basic-navbar-nav" />
            <NavbarRB.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Accion 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Accion 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Accion 3</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Otro Link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <CardWidget />
            </NavbarRB.Collapse>
          </Container>
        </NavbarRB>
      </header>
    </div>
  );
}

export default NavBar;
