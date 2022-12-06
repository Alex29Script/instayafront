import React from "react";
import { ReactSession } from 'react-client-session';

export const user_verification=()=>{
    if(ReactSession.get("username")){
        console.log("existe usuario", ReactSession.get("username"))
        
      }else{
        window.location.href = "/login"
        
      }
}
