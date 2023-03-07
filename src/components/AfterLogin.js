import React,{useContext} from "react";
import UserContext from "../context/UserContext"




export default function AfterLogin(){
    const auth=useContext(UserContext);

    
    
    return(
        <div>
          
            <h1>This is after login page user is{auth.user} </h1>
           

        </div>
    )
}