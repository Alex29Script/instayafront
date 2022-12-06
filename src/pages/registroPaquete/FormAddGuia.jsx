import React, { useEffect, useState } from "react";
import { url_server } from "../../components/server_backend/conexion";
import { ReactSession } from 'react-client-session';
import {user_verification} from "../../components/Auxiliary/Auxiliary"
import { NavBarCustomer } from "../../components/NavBarCustomer/NavBarCustome";

export function FormAddGuia(){
    user_verification()
    const add_guia=(event)=>{
        event.preventDefault()
        const guia={};
        guia.username=ReactSession.get("username")
        //guia._id=document.getElementById("id").value;
        guia.nit=document.getElementById("nit").value;
        guia.fecha=document.getElementById("fecha").value;
        guia.dir_recogida=document.getElementById("dir_recogida").value;
        guia.ciudad_recogida=document.getElementById("dir").value;
        guia.largo=document.getElementById("largo").value;
        guia.ancho=document.getElementById("ancho").value;
        guia.alto=document.getElementById("alto").value;
        guia.peso=document.getElementById("peso").value;
        guia.nombre_des=document.getElementById("nombre_des").value;
        guia.nit_des=document.getElementById("nit_des").value;
        guia.dir_des=document.getElementById("dir_des").value;
        guia.ciudad_des=document.getElementById("ciudad_des").value;
        guia.estado="Guardado";
        console.log(document.getElementById("delicado").value)
        if (document.getElementById("delicado").value=="true"){
            guia.delicado=true
        }else{
            guia.delicado=false
        }

            console.log("guia a registar: ",guia)
        
        fetch(`${url_server}/guia/agregar`,{
            headers:{"Content-Type":"application/json"},
            mode: 'cors',
            method:"post",
            body:JSON.stringify({guia})
            }).then(res=> res.json())
            .then(res=> {console.log(res)})
            .then( window.location.href = "/listadoOrdenes")
        
        }
       





    return(
        <>
        <NavBarCustomer/>
        <span></span>
        <span></span>
        <div className="container-sm">
        <h2>Formulario </h2>
        <h2>Generar guía para el usuario: {ReactSession.get("username")}</h2>
        
       
            <div className="p-3 mb-2 bg-light text-dark bg-opacity-50">
            <div className="container-sm">
            <form id="form_guia" className="row g-3"  onSubmit={(event)=>add_guia(event)} > 
            <h3>1.Datos del remitente</h3>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="nit">NIT del Remitente:</label>
                    <input className="form-control" required type="text" id="nit" name="nit"  />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="fecha">Fecha de Recogida </label>
                    <input className="form-control" required type="datetime-local" id="fecha" name="fecha" />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="dir">Dirección de Recogida</label>
                    <input className="form-control" required type="text" id="dir" name="dir" />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="dir_recogida">Ciudad de Recogida </label>
                    <input className="form-control" required type="text" id="dir_recogida" name="dir_recogida" />
                </div>
                <br></br>
                <br></br>
                <h3>2.Medidas y especificaciones</h3>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="largo">largo:</label>
                    <input className="form-control" required type="number" id="largo" min="1"  name="largo" />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="ancho">ancho:</label>
                    <input className="form-control" required type="number" id="ancho"  min="1" name="ancho" />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="alto">alto</label>
                    <input className="form-control" required type="number" id="alto" min="1" />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="peso">peso (Kg)</label>
                    <input className="form-control" required type="number" id="peso" min="1" name="peso" />
                </div>
                <div className="col-md-4">          
                <select  className="form-select" name="delicado" id="delicado">
                    <option value="true">delicado</option>
                    <option value="false" selected>no delicado</option>
                </select>
                </div>  

                <h3>3.Datos del destinatario</h3>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="nit_des">NIT del Destinatario:</label>
                    <input className="form-control" required type="text" id="nit_des"  />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="nombre_des">Nombre del Destinatario:</label>
                    <input className="form-control" required type="text" id="nombre_des" name="nombre_des"  />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="dir_des">Direccion del destinatario:</label>
                    <input className="form-control" required type="text" id="dir_des" name="dir_des" />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="ciudad_des">Ciudad de Destino:</label>
                    <input className="form-control" required type="text" id="ciudad_des" name="ciudad_des"  />
                </div>
                <h3>4.Registrar guia</h3>
                <input type="submit" value="Generar Guía" className="btn btn-primary" />
            </form>
            </div>
            </div>
            </div>
                             
        </>
    )

}