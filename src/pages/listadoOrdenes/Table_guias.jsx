import React, { useEffect, useState } from "react";
import { url_server } from "../../components/server_backend/conexion";
import { ReactSession } from 'react-client-session';

export function Table_guias(){
    const[Guias, setGuias]=useState([])
    const username= ReactSession.get("username")
    const url_server_fornt="http://localhost:3000"
    const load_guias=()=>{
        
        console.log(`${url_server}/`)
        //fetch(`${url_server}/`,{
        console.log(`${url_server}/guias/todas/?username=${username}`)
        fetch(`${url_server}/guias/todas/?username=${username}`,{
            mode: 'cors',
            method:"get",
            }).then(res=> res.json())
            .then(res=>{
                if(res.valor!=false){                 
                    setGuias(res.guias.user_guias)
            }else{setGuias([])}                   
            }).catch(function (reason){console.log(reason)})
    }
    
    useEffect(()=>{
        load_guias()
        
        },[])
   //href={url_server+"/guia/buscar/?id_guia="+guia._id+"&username="+username}


    return(
        <>
        { 
            <h1>Guias de {username}</h1>
        
        }
        <div class="container-sm">
        <div className="p-3 mb-2 bg-white text-dark bg-opacity-75">
        <table  className="table">
        <thead>
            <tr>
                <th  scope="col"> ID Guia</th>
                <th  scope="col"> Destinatario </th>
                <th  scope="col">Fecha </th>
                <th  scope="col"> Ciudad </th>
                <th  scope="col"> Ciudad Destino </th>
                <th  scope="col"> Estado </th>
                <th  scope="col"> Acciones </th>


            </tr>
        </thead>
        <tbody>
            {
                Guias.map(guia=> 
                
                <tr key={guia._id}>
                <td scope="row"> {guia._id}</td>
                <td> {guia.nombre_des} </td>
                <td> {guia.fecha} </td>
                <td> {guia.ciudad_recogida} </td>
                <td> {guia.ciudad_des} </td>
                <td> {guia.estado} </td>
                <td><a className="btn btn-primary" role="button" href={url_server_fornt+"/guia/buscar/?id_guia="+guia._id+"&username="+username}>ver</a></td>
                </tr>
                )
            
             }
        </tbody>

        </table>
        </div>    
        </div>
        
        </>

    )
}
