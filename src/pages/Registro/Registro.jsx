import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import "./Registro.css";
import NavbarComp from "../../components/NavbarComp/NavbarComp";
import { url_server } from "../../components/server_backend/conexion";

export const Registro = () => {
  const registrarse = async(e) => {
    e.preventDefault();
    const formulario = {};
    formulario.username = document.getElementById("nombreUsuario").value;
    formulario.email = document.getElementById("email").value;
    formulario.pass = document.getElementById("contraseña").value;
    console.log(formulario);
    const respuesta = await enviar(formulario);
    console.log(respuesta);
    window.location.href = "/login"
  }
  const redireccionLogin = () => {
    window.location.href = "/login";
  };
  async function enviar(formulario={}){
    fetch(`${url_server}/registrar`,{
      headers:{"Content-Type":"application/json"},
    mode: 'cors',
    method:"post",
    body: JSON.stringify(formulario)
    }).then(res=> res.json())
    .then(res=> {console.log(res)})
    .then(res=>{ return res})
    
  
  };
  
  return (<>
      <NavbarComp/>
      {/* <div className="registro-page d-flex container">
                <section className="m-8">
                    <div className="frase-registro">
                        <h2>Haz parte de la <span>MEJOR</span> red de envios del país</h2>
                    </div>
                    <div className="p-4">
                        <img className="registro-foto pt-4" src="registro-instaya.png" alt="delivery" />
                    </div>
                </section>
                <section className="registro-form mt-4 p-4">
                    <div className="logo d-flex justify-content-center mb-3 mt-3">
                        <a href="/"><img src="logo.png" alt="logo" /></a>
                    </div>
                    <form className="d-flex justify-content-center form-group row mb-1">
                        <div className=" mb-3 col-md-10">
                            <CustomInput placeholder="Nombre de Usuario" type="text" name="nombreUsuario" id="nombreUsuario"/>
                        </div>
                        <div className=" mb-3 col-md-10">
                            <CustomInput placeholder="Email" type="text" name="email" id="email"/>
                        </div>
                        <div className=" mb-3 col-md-10">
                            <CustomInput placeholder="Contraseña" type="password" name="contraseña" id="contraseña"/>
                        </div>
                        <div className=" mb-3 col-md-10">
                            <CustomInput placeholder="Confirmar Contraseña" type="password" name="confirmarContraseña" id="confirmarContraseña"/>
                        </div>                         
                        <div className="row d-flex justify-content-center mb-1 mt-4">
                            <CustomButton className="col-md-10" type="submit" placeholder="Registrarse" onclick={registrarse}/>
                        </div>
                    </form>
                    <div className="row d-flex justify-content-center mt-1">
                        <div className="text-center">
                            <h6 className="crear-cuenta-frase p-2 fw-bold">¿ya tienes una cuenta? inicia sesion aquí</h6>
                        </div>                        
                        <div className="row d-flex justify-content-center mb-4">
                            <CustomButton className="col-md-10"  placeholder="Iniciar Sesion" onclick={redireccionLogin}/>
                        </div>
                    </div>
                </section>
            </div> */} 

      <div className="login-box">
        <a href="/">
          <h2>Registrase</h2>
        </a>

        <form>
          <div className="user-box">
          <CustomInput placeholder="Nombre de Usuario" type="text" name="nombreUsuario" id="nombreUsuario"/>
          </div>
          <div className="user-box">
          <CustomInput placeholder="Email" type="text" name="email" id="email"/>
          </div>
          <div className="user-box">
          <CustomInput placeholder="Contraseña" type="password" name="contraseña" id="contraseña"/>
          </div>
          <div className="user-box">
          <CustomInput placeholder="Confirmar Contraseña" type="password" name="confirmarContraseña" id="confirmarContraseña"/>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <CustomButton className="col-md-10" type="submit" placeholder="Registrarse" onclick={registrarse}/>
          </a>
        </form>
        <h6 className="d-flex m-2">¿Ya tienes una cuenta? <CustomButton placeholder="Iniciar Sesión" onclick={redireccionLogin}/></h6>
      </div>
    </>
  );
};
