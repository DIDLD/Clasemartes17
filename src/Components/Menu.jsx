import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'



export default function Menu() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Sistema Demostración</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contáctanos</Nav.Link>
            <Nav.Link href="/us">Nosotros</Nav.Link>
            <Nav.Link href="/Login">Iniciar sesión</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}


/*<nav>
            <ul>
                              <li>
                    <Link to ="/">Inicio</Link>
                </li>
                <li>
                    <Link to = "/contact">Contáctenos</Link>
                </li>

                <li> 
                    <Link to= "/us">Nosotros</Link>
                </li>

                <li>
                    <Link to= "/login">Login</Link>
                </li>
            </ul>
        </nav> */