import React from "react";
import { ReactSession } from 'react-client-session';

export const user_verification=()=>{
    if(localStorage.getItem("username")){
        console.log("existe usuario", localStorage.getItem("username"))
        
      }else{
        window.location.href = "/login"
        
      }
}
