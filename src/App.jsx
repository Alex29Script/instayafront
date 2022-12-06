import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Login} from "./pages/Login/Login";
import {Registro} from "./pages/Registro/Registro";
import "bootstrap/dist/css/bootstrap.min.css";
import {Home} from "./pages/Home/Home";
import {ListadoOrdenes} from "./pages/listadoOrdenes/listadoOrdenes";
import {Formulario} from "./pages/registroPaquete/registroPaquete";
import {Prueba} from "./pages/listadoOrdenes/Prueba";
import {ReactSession } from 'react-client-session';
import { FormAddGuia } from "./pages/registroPaquete/FormAddGuia";
import { FormUpdate } from "./pages/seguimiento/FormUpdate";
import { Form_for_ghia } from "./pages/Home/Form_for_guia";

export const App = () => {
  ReactSession.setStoreType("cookie");

    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/listadoOrdenes" element={<ListadoOrdenes />} />
            <Route path="/registro-paquete" element={<FormAddGuia />} />
            <Route path="/prueba" element={<Prueba/>} />
            <Route path="/guia/buscar" element={<FormUpdate/>}/>
            <Route path="/guia/unica/" element={<Form_for_ghia/>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }


