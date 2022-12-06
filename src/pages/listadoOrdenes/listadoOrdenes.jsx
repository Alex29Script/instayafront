import React, { Fragment, useState, useRef, useEffect } from "react";
import "./listadoOrdenes.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Offcanvas,
  Row
} from "react-bootstrap";
import "../../components/NavbarComp/NavbarComp.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactSession } from 'react-client-session';
import { NavBarCustomer } from "../../components/NavBarCustomer/NavBarCustome";
import { Table_guias } from "./Table_guias";

export function ListadoOrdenes() {
  
  if(ReactSession.get("username")){
    console.log("existe usuario", ReactSession.get("username"))
    
  }else{
    window.location.href = "/login"
    
  }

  function link_guia(){
    const id=document.getElementById("trackNumber").value
    if(id.length>20){
      window.location.href=`/guia/unica/?id=${id}`
      
    }
  }
  
  return (
    <>
    <div>
    <NavBarCustomer/>
      <div className='container-fluid"'>
        <blockquote className="blockquote text-center">

          <div className='container my-5 pb-3'>
            <h2 className="guia">Guia # ...</h2>
          </div>
          <Row className="justify-content-md-center">

            
            <div class="multi-search-bar" style={{position: "inherit"}}>
               <div class="search-bar-field">
                  <span>Consultar</span>
               </div>
               
               <div class="search-bar-field number">
                  <input type="text" class="form-control" id="trackNumber" placeholder="Ingresa el # de guía"/>
               </div>
               <div class="search-bar-field search-bar-btn">
                

                  <button class="search-bar-consult" ><img src="../mayorque.png" width="100%" height="100%" alt="Consultar" onClick={link_guia}/></button>
                
               </div>
            </div>
           
          </Row>
         
          
          <Table_guias/>
          {/* <div className='container my-5 parrafo'>
          <p>Su envio esta en proceso de entrega, recuerde que puede cancelar su solicitud hasta 22 horas despues de creada la misma</p>
          <button className='btn btn-danger'>Cancelar solicitud</button>
          </div> */}
        </blockquote>
      </div>
    </div>
    </>
  );
}
