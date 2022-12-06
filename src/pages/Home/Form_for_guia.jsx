import React from "react";
import NavbarComp from "../../components/NavbarComp/NavbarComp";
import { url_server } from "../../components/server_backend/conexion";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


export const Form_for_ghia=()=>{
    const query= new URLSearchParams(useLocation().search)
    const guia_unica=query.get("id")
    const [Datos_guias,setDatos_guias]=useState([])
    console.log(guia_unica)
    const solicitar_datos_guia=()=>{
        
        console.log(guia_unica)
        fetch(`${url_server}/guia/buscar/unica/?id=${guia_unica}`,{
            method:"get",
            mode:"cors"
        }).then(res=>res.json())
        .then(res=>{
            if(res.valor==true){
                setDatos_guias([res.guia])
            }else{
                setDatos_guias([])
                window.location.href = "/"
            }
        })
    }

    useEffect(()=>{
        solicitar_datos_guia()
    },[])

    const volver_inicio=()=>{
        window.location.href = "/"
    }

    return(
        <>
        <NavbarComp/>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <br></br>
        { Datos_guias.map(guia=>
            
            <div className="container-sm">
            <div className="p-3 mb-2 bg-light text-dark bg-opacity-50">
            <form className="row g-3" >
                <div className="col-md-4">
                    <label className="form-label" htmlFor="id">id</label>
                    <input className="form-control"  required type="text" id="id" name="id" value={guia._id} key={guia._id}/>
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="fecha">Fecha</label>
                    <input className="form-control"  required type="datetime-local" id="fecha" name="fecha" value={guia.fecha}  />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="dir_recogida">Ciudad de Recogida </label>
                    <input className="form-control" required type="text" id="dir_recogida" name="dir_recogida" value={guia.ciudad_recogida}/>
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="ciudad_des">Ciudad de Destino:</label>
                    <input className="form-control" required type="text" id="ciudad_des" name="ciudad_des" value={guia.ciudad_des} />
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="nit">Estado</label>
                    <input className="form-control" required type="text" id="nit" name="nit" value={guia.estado} />
                </div>
            </form>
            <br></br>
            <button type="button" className="btn btn-danger" onClick={volver_inicio}>volver</button>
            </div>
            </div>
        )
        }    
        
        </>
    )
}