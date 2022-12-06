import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import NavbarComp from "../../components/NavbarComp/NavbarComp.jsx";
import "../../pages/Home/Home.css";
import { Form_for_ghia } from "./Form_for_guia.jsx";
import { useState } from "react";



export class Home extends Component {
  
  
  
  render() {
    function link_guia(){
      const id=document.getElementById("trackNumber").value
      if(id.length>20){
        window.location.href=`/guia/unica/?id=${id}`
        
      }
    }
    return (
      <div>
        
        <NavbarComp />
        
        <Container>
        
        <img src="../video.gif" width="100%" height="600px" />
          <Row className="justify-content-md-center">

            
            <div class="multi-search-bar">
               <div class="search-bar-field">
                  <span>Consultar</span>
               </div>
               
               <div class="search-bar-field number">
                  <input type="text" class="form-control" id="trackNumber" placeholder="Ingresa el # de guía"/>
               </div>
               <div class="search-bar-field search-bar-btn">
                

                  <button class="search-bar-consult" onClick={link_guia}><img src="../mayorque.png" width="100%" height="100%" alt="Consultar"/></button>
                
               </div>
               
            </div>
            
          </Row>
          
        </Container>
        
      </div>
    );
  }
}
