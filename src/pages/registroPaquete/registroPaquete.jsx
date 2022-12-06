import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./registroPaquete.css";
import NavBarComp from "../../components/NavbarComp/NavbarComp";
import "bootstrap/dist/css/bootstrap.min.css";

import "../listadoOrdenes/listadoOrdenes.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Offcanvas,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";
import "../../components/NavbarComp/NavbarComp.css";

export const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <div>
        {["md"].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand href="#" className="LogoInstaya">
                InstaYA
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
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
                    <Nav.Link href="/seguimiento" className="items_menu">
                      Seguimiento de solicitud
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
      <div>
        <header>
          {" "}
          <div className="Cabecera d-flex justify-content-center">
            {" "}
            <h1 className="mt-3"> REGISTRO DE PAQUETE </h1>{" "}
          </div>{" "}
        </header>
        <div className="cuadro"> </div>
        <div className="container">
          <Formik
            initialValues={{
              dimensionPaquete: "",
              ciudadPartida: "",
              ciudadDestino: "",
              remitente: "",
              direccionRecibe: "",
              pesoPaquete: "",
              envioRapido: "",
            }}
            validate={(valores) => {
              let errores = {};

              return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
              resetForm();
              console.log("Formulario enviado");
              cambiarFormularioEnviado(true);
              setTimeout(() => cambiarFormularioEnviado(false), 5000);
            }}
          >
            {({ errors }) => (
              <Form className="formulario" style={{ display: "flex" }}>
                <form>
                  <label>
                    <h4> Ingrese descripcion del paquete: </h4>
                    {/* <input type="text" name="name" /> */}
                    <textarea name="name" cols="10" rows="3"></textarea>
                  </label>
                </form>

                <Container className="contact-content debug-border">
                  <Row className="justify-content-center">
                    <Col className="text-center text-md-right">
                      <div className="enunciados">
                        {" "}
                        <label htmlFor="dimensionPaquete">
                          Dimensiones del paquete
                        </label>{" "}
                      </div>
                      <div className="campos">
                        {" "}
                        <Field
                          type="text"
                          id="dimensionPaquete"
                          name="dimensionPaquete"
                          placeholder="1x1 cm"
                        />{" "}
                      </div>
                      <ErrorMessage
                        name="dimensionPaquete"
                        component={() => (
                          <div className="error">{errors.dimensionPaquete}</div>
                        )}
                      />
                    </Col>

                    <Col className="text-center text-md-left">
                      <div className="enunciados">
                        {" "}
                        <label htmlFor="ciudadPartida">
                          Ciudad de Partida
                        </label>{" "}
                      </div>
                      <div className="campos">
                        {" "}
                        <Field
                          type="text"
                          id="ciudadPartida"
                          name="ciudadPartida"
                          placeholder="Bogota"
                        />{" "}
                      </div>
                      <ErrorMessage
                        name="ciudadPartida"
                        component={() => (
                          <div className="error">{errors.ciudadPartida}</div>
                        )}
                      />
                    </Col>
                  </Row>

                  <Row className="justify-content-center">
                    <Col className="text-center text-md-right">
                      <div className="enunciados">
                        {" "}
                        <label htmlFor="ciudadDestino">
                          Ciudad de destino
                        </label>{" "}
                      </div>
                      <div className="campos">
                        <Field
                          type="text"
                          id="ciudadDestino"
                          name="ciudadDestino"
                          placeholder="Tunja"
                        />{" "}
                      </div>
                      <ErrorMessage
                        name="ciudadDestino"
                        component={() => (
                          <div className="error">{errors.ciudadDestino}</div>
                        )}
                      />
                    </Col>
                    <Col className="text-center text-md-left">
                      <div className="enunciados">
                        {" "}
                        <label htmlFor="remitente">Remitente</label>{" "}
                      </div>
                      <div className="campos">
                        <Field
                          type="text"
                          id="remitente"
                          name="remitente"
                          placeholder="Pancracia Tocarruncho"
                        />{" "}
                      </div>
                      <ErrorMessage
                        name="remitente"
                        component={() => (
                          <div className="error">{errors.remitente}</div>
                        )}
                      />
                    </Col>
                  </Row>

                  <Row className="justify-content-center">
                    <Col className="text-center text-md-right">
                      <div className="enunciados">
                        {" "}
                        <label htmlFor="direccionRecibe">
                          Direccion de recibo
                        </label>{" "}
                      </div>
                      <div className="campos">
                        <Field
                          type="text"
                          id="direccionRecibe"
                          name="direccionRecibe"
                          placeholder="fake street 123"
                        />{" "}
                      </div>
                      <ErrorMessage
                        name="direccionRecibe"
                        component={() => (
                          <div className="error">{errors.direccionRecibe}</div>
                        )}
                      />
                    </Col>

                    <Col className="text-center text-md-left">
                      <div className="enunciados">
                        {" "}
                        <label htmlFor="pesoPaquete">
                          Peso del paquete
                        </label>{" "}
                      </div>
                      <div className="campos">
                        {" "}
                        <Field
                          type="text"
                          id="pesoPaquete"
                          name="pesoPaquete"
                          placeholder="1kg"
                        />{" "}
                      </div>
                      <ErrorMessage
                        name="pesoPaquete"
                        component={() => (
                          <div className="error">{errors.pesoPaquete}</div>
                        )}
                      />
                    </Col>
                  </Row>

                  <div>
                    <label htmlFor="EnvioRapido">
                      {" "}
                      Envio Rapido
                      <Field type="radio" name="envioRapido" value="Si" /> Si
                      <Field type="radio" name="envioRapido" value="No" /> No
                    </label>
                  </div>

                  <Row className="botonEnviarRegistro">
                    <Col>
                      <button type="submit">Enviar</button>
                      {formularioEnviado && (
                        <p className="exito">Formulario enviado con exito!</p>
                      )}
                    </Col>
                  </Row>
                </Container>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
