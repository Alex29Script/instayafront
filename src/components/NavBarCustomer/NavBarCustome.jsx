import React, { Fragment, useState, useRef, useEffect } from "react";
import "./NavBarCustomer.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Offcanvas,
  Row
} from "react-bootstrap";
import "../NavbarComp/NavbarComp.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactSession } from 'react-client-session';

export const NavBarCustomer=()=>{
    const cerrar_session=()=>{
        ReactSession.remove("username");
        window.location.href = "/"
      }
    return(
        <>
        <div>
        {["md"].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3 navbarInterno">
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
              <Offcanvas.Body className="justify-content-end ">
                <Nav className="justify-content-end ">
                  <Nav.Link href="/" className="items_menu">
                    Inicio
                  </Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                  <Nav.Link href="/registro-paquete" className="items_menu">
                    Registrar solicitud
                  </Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                  <Nav.Link href="/listadoOrdenes" className="items_menu">
                    Listado de Ordenes
                  </Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                  <Nav.Link onClick={cerrar_session} className="items_menu">
                    Cerrar sesión
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        
      ))}
        </div>
        
        </>



    )
}