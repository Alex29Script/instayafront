import React, { useEffect, useState } from "react";
import { url_server } from "../../components/server_backend/conexion";
import { useLocation } from "react-router-dom";
import { ReactSession } from 'react-client-session';
import { NavBarCustomer } from "../../components/NavBarCustomer/NavBarCustome";



export  function  FormUpdate (){
    const query= new URLSearchParams(useLocation().search)
    const [XGuias, setXGuias]=useState([])
    const guia_unica=query.get("id_guia")
    const user=query.get("username")

    const buscar_guia=()=>{
        
        //http://localhost:8080/guia/buscar/?id_guia=638d6c454b3fe489b2f67f45&username=alex32api
        
        if(user==ReactSession.get("username")){
        fetch(`${url_server}/guia/buscar/?username=${user}&id_guia=${guia_unica}`,{
            mode: 'cors',
            method:"get",
            }).then(res=> res.json())
            .then(res=>{                 
                   
                    console.log(res.guias.user_guias.fecha)
                    setXGuias([res.guias.user_guias])
                    
            })}else{window.location.href = "/login"}
        
    }
    
      
    const actualizar_guia=(event)=>{
        event.preventDefault()
        const guia={};
        guia.username=ReactSession.get("username")
        guia._id=document.getElementById("id").value;
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

            console.log("guia actualizar: ",guia)
        
        fetch(`${url_server}/guia/actualizar`,{
            headers:{"Content-Type":"application/json"},
            mode: 'cors',
            method:"post",
            body:JSON.stringify({guia})
            }).then(res=> res.json())
            .then(res=> {console.log(res)})
            .then(window.location.href = "/listadoOrdenes")
        
    }

   
    





    return(
        <>
        <NavBarCustomer/>
        <span></span>
        <span></span>
        <div className="container-sm">
        <h3>Formulario de Guía</h3>
        <p>Usted quiere ver la información del siguiente servicios:</p>
        <p>para el usuario <input className="form-control" type="text" name="" id="" value={user}/> la gúia N° <input className="form-control" type="text" name="" id="" value={guia_unica}/> </p>
        <input type="submit" value="ver más infromacion" className="btn btn-primary" onClick={buscar_guia}/>
        <span></span>
        <span></span>
        <br />
       
            {
            XGuias.map(guia=>
            <div className="container-sm">
            <div className="p-3 mb-2 bg-light text-dark bg-opacity-50">
            <form id="form_guia" className="row g-3" key={guia._id} onSubmit={(event)=>actualizar_guia(event)} > 
            <h3>1.Datos del remitente</h3>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="id">id</label>
                    <input className="form-control"  required type="text" id="id" name="id" value={guia._id} />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="nit">NIT del Remitente:</label>
                    <input className="form-control" required type="text" id="nit" name="nit" defaultValue={guia.nit} />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="fecha">Fecha de Recogida </label>
                    <input className="form-control" required type="datetime-local" id="fecha" name="fecha" defaultValue={guia.fecha}/>
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="dir">Dirección de Recogida</label>
                    <input className="form-control" required type="text" id="dir" name="dir" defaultValue={guia.dir_recogida}/>
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="dir_recogida">Ciudad de Recogida </label>
                    <input className="form-control" required type="text" id="dir_recogida" name="dir_recogida" defaultValue={guia.ciudad_recogida}/>
                </div>
                <br></br>
                <br></br>
                <h3>2.Medidas y especificaciones</h3>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="largo">largo:</label>
                    <input className="form-control" required type="number" id="largo" min="1"  name="largo" defaultValue={guia.largo}/>
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="ancho">ancho:</label>
                    <input className="form-control" required type="number" id="ancho"  min="1" name="ancho" defaultValue={guia.ancho}/>
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="alto">alto</label>
                    <input className="form-control" required type="number" id="alto" min="1" defaultValue={guia.alto}/>
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="peso">peso (Kg)</label>
                    <input className="form-control" required type="number" id="peso" min="1" name="peso" defaultValue={guia.peso}/>
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
                    <input className="form-control" required type="text" id="nit_des" defaultValue={guia.nit_des} />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="nombre_des">Nombre del Destinatario:</label>
                    <input className="form-control" required type="text" id="nombre_des" name="nombre_des" defaultValue={guia.nombre_des} />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="dir_des">Direccion del destinatario:</label>
                    <input className="form-control" required type="text" id="dir_des" name="dir_des" defaultValue={guia.dir_des} />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="ciudad_des">Ciudad de Destino:</label>
                    <input className="form-control" required type="text" id="ciudad_des" name="ciudad_des" defaultValue={guia.ciudad_des} />
                </div>
                <h3>4.Actualizar guia</h3>
                <input type="submit" value="Actualizar Guía" className="btn btn-primary" />
            </form>
            </div>
            </div>
            )

            }
            </div>                
        </>
    )

}