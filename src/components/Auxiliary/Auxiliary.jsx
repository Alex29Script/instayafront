import React from "react";
import { ReactSession } from 'react-client-session';

export const user_verification=()=>{
    if(sessionStorage.getItem("username")){
        console.log("existe usuario", sessionStorage.getItem("username"))
        
      }else{
        window.location.href = "/login"
        
      }
}
