import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Offcanvas,
} from "react-bootstrap";
import "./NavbarComp.css";

const NavbarComp = () => {
  return (
    <div>
      {["md"].map((expand) => (
        
        <Navbar key={expand} bg="light" expand={expand} className="mb-3  navbarInterno">
          <Container fluid>
            <Navbar.Brand href="#" className="LogoInstaya">
              InstaYA
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/" className="items_menu">
                    inicio
                  </Nav.Link>
                  <Nav.Link href="/registro" className="items_menu">
                    Registrarse
                  </Nav.Link>
                </Nav>
                <Button
                  href="/login"
                  className="Iniciar_sesion btn-iniciarSesion"
                >
                  Iniciar Sesion
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        
      ))}
    </div>
  );
};
export default NavbarComp;
