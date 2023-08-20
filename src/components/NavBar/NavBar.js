import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarRB from 'react-bootstrap/Navbar';
import CardWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="App">
      <header className="App-header">
        
        <NavbarRB expand="lg" className="bg-body-tertiary custom-navbar">
          <Container>
            <NavbarRB.Toggle aria-controls="basic-navbar-nav" />
              <Nav >
                <NavLink to={'/'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Ecommerce</NavLink>
                <NavLink to={'/category/iphone'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Iphone</NavLink>
                <NavLink to={'/category/samsumg'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>samsumg</NavLink>
              </Nav>
              <CardWidget />
          </Container>
        </NavbarRB>
      </header>
    </div>
  );
}

export default NavBar;
