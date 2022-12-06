import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
const uri="http://localhost:8080/"

/*
// buscar una guia
//prueba guia n 637c2641574384689ace7662
// usuario geraldine

export const Prueba =  () => {
    const buscarguia=async (e)=>{
        e.preventDefault();
        const guia={};
        guia.username="geraldine";
        guia.id_guia=document.getElementById("trackNumber").value;
        console.log(guia);
        await fetch(`${uri}guia/buscar/?username=${guia.username}&id_guia=${guia.id_guia}`,{
        headers:{"Content-Type":"application/json"},
        mode: 'cors',
        method:"get",
        }).then(res=> res.json())
        .then(res=> {console.log(res)})
        

    }
    return (
    <>
    <input id="trackNumber" type="text"></input>
    <button onClick={buscarguia}>click</button>
    
    </>
    );
};

*/


/*
//buscar la espesifica de un usuario especifico
export const Prueba=()=>{
    const buscarguias=async (e)=>{
        e.preventDefault();
        const username="alex32api";
        await fetch(`http://localhost:8080/guias/todas/?username=${username}`,{
            headers:{"Content-Type":"application/json"},
            mode: 'cors',
            method:"get",
            }).then(res=> res.json())
            .then(res=> {console.log(res)})
        

    }
    return (
    <>
    <button onClick={buscarguias}>Buscar todas las guias </button>
    </>
    );
}
*/


// login de usuario
/*
export function Prueba(){
    const  login= async (e)=>{
        e.preventDefault();
        const user={};
        user.username=document.getElementById("username").value;
        user.pass=document.getElementById("pass").value;
        console.log(user)
        await fetch(`${uri}login`,{
            headers:{"Content-Type":"application/json"},
            mode: 'cors',
            method:"post",
            body:JSON.stringify(user)
            }).then(res=> res.json())
            .then(res=> {console.log(res)})
    }
    return(
        <>
        <form>
            <label htmlFor="username"> nombre de usuario </label>
            <input type="text" id="username" />
            <label htmlFor="pass"> contraseña </label>
            <input type="password" id="pass" />
            <button onClick={login}> enviar</button>
        </form>
               
        </>


    )

}
/*



/*
// registrar una orden
export const Prueba=()=>{
    const  info_form= async (e)=>{
        e.preventDefault();

        const guia={};
        guia.username="alex32api"
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

        console.log(guia)
        await fetch(`${uri}guia/agregar`,{
            headers:{"Content-Type":"application/json"},
            mode: 'cors',
            method:"post",
            body:JSON.stringify({guia})
            }).then(res=> res.json())
            .then(res=> {console.log(res)})

    }  
    return(
        <>
            <form id="form_guia" > 
                <p>
                    <label htmlFor="nit">NIT del Remitente:</label>
                    <input type="text" id="nit" name="nit"/>
                </p>
                <p>
                    <label htmlFor="fecha">Fecha de Recogida </label>
                    <input type="datetime-local" id="fecha" name="fecha"/>
                </p>
                <p>
                    <label htmlFor="dir">Direccion de Recogida</label>
                    <input type="text" id="dir" name="dir" />
                </p>
                <p>
                    <label htmlFor="dir_recogida">Ciudad de Recogida </label>
                    <input type="text" id="dir_recogida" name="dir_recogida" />
                </p>
                <br></br>
                <br></br>
                <p>Medidas y especificaciones</p>
                <p>
                    <label htmlFor="largo">largo:</label>
                    <input type="number" id="largo" min="1"  name="largo"/>
                </p>
                <p>
                    <label htmlFor="ancho">ancho:</label>
                    <input type="number" id="ancho"  min="1" name="ancho"/>
                </p>
                <p>
                    <label htmlFor="alto">alto</label>
                    <input type="number" id="alto" min="1" />
                </p>
                <p>
                    <label htmlFor="peso">peso (Kg)</label>
                    <input type="number" id="peso" min="1" name="peso"/>
                </p>

              
                <select name="delicado" id="delicado">
                    <option value="true">Delicado</option>
                    <option value="false" selected>no Delicado</option>
                </select>

                <p>Destinatario</p>
                <p>
                    <label htmlFor="nit_des">NIT del Destinatario:</label>
                    <input type="text" id="nit_des" />
                </p>
                <p>
                    <label htmlFor="nombre_des">Nombre del Destinatario:</label>
                    <input type="text" id="nombre_des" name="nombre_des" />
                </p>
                <p>
                    <label htmlFor="dir_des">Direccion del destinatario:</label>
                    <input type="text" id="dir_des" name="dir_des" />
                </p>
                <p>
                    <label htmlFor="ciudad_des">Ciudad de Destino:</label>
                    <input type="text" id="ciudad_des" name="ciudad_des" />
                </p>

                
            </form>
            <button onClick={info_form}>enviar</button>
        
        </>

    )
}
*/



export function Prueba() {
    const [Guias, setListado] = useState([])
    const rguias={}
    useEffect(()=>{
        const username="Liam";
        fetch(`http://localhost:8080/guias/todas/?username=${username}`,{
            headers:{"Content-Type":"application/json"},
            mode: 'cors',
            method:"get",
            }).then(res=> res.json())
            //.then(res=> {console.log(res.guias.user_guias,typeof(res.guias.user_guias),res.guias.user_guias.length)})
            .then(res=>{
                
                setListado(res.guias.user_guias)
            })

    },[])
    


    return(
        <table className="table">
            <thead>
            <tr>
                <th> id </th>
                <th>fecha</th>
                <th>estado</th>
            </tr>
            </thead>
            <tbody>
                {
                    Guias.map(guia=> <tr key={guia._id}>
                            <td> {guia._id}</td>
                            <td> <input type="datetime" value={guia.fecha} readOnly/></td>
                            <td>{guia.estado})</td>
                            <td><button type="botton">enviar</button></td>

                        </tr>
                    )
                }
            </tbody>

        </table>
        
    )

}