import React from "react";
import { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import "./Login.css";
import {ReactSession } from 'react-client-session';
import NavbarComp from "../../components/NavbarComp/NavbarComp";
import { url_server } from "../../components/server_backend/conexion";
import { redirect } from "react-router-dom";


export const Login = () => {
  const iniciarSesion = (e) => {
    e.preventDefault();
    const formulario = {};
    formulario.username = document.getElementById("usuario").value;
    formulario.pass = document.getElementById("contraseña").value;
    console.log(formulario);
    fetch(`${url_server}/login`,{
      headers:{"Content-Type":"application/json"},
    mode: 'cors',
    method:"post",
    body: JSON.stringify(formulario)
    }).then(res=> res.json())
    .then(res=> {
      if(res.auth==true){
        console.log("puede iniciar")
        ReactSession.set("username",formulario.username)
        localStorage.setItem("username",formulario.username)
        window.location.href="/listadoOrdenes"
      }else{console.log("no puede iniciar")}
    })    
  };
  const redireccionRegistro = () => {
    window.location.href = "/registro";
  };

  const user_verification=()=>{
    if(localStorage.getItem("username")){
        console.log("existe usuario", localStorage.getItem("username"))
        window.location.href = "/listadoOrdenes"
      }else{
        window.location.href = "/login"
        
      }
  }
  user_verification()
  

  return (
    
    
    <>
      <NavbarComp/>
      <div className="login-box">
        <a href="/">
          <h2>Iniciar Sesíon</h2>
        </a>

        <form>
          <div className="user-box">
          <CustomInput placeholder="Usuario" type="text" name="usuario" id="usuario"/>
          </div>
          <div className="user-box">
          <CustomInput placeholder="Contraseña" type="password" name="contraseña" id="contraseña"/>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <CustomButton className="col-md-10" type="submit" placeholder="Iniciar Sesion" onclick={iniciarSesion}/>
          </a>

        </form>
          <h6 className="d-flex m-2">¿No tienes una cuenta? <CustomButton placeholder="Registrarme" onclick={redireccionRegistro}/></h6>
      </div>
    </>
  );
};
