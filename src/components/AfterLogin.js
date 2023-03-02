import React from "react";
import { useLocation } from "react-router-dom";
import { User, Loggedin } from "../context/UserAuthContext";
import { useContext } from "react";
import Userbar from "./Userbar";
import { Route, Link, Routes } from "react-router-dom";
import Profile from "./Profile";


export default function AfterLogin(){
    const user= useContext(User);
    // const location = useLocation();
   
// console.log(location.state) 
    return(
        <div>
            <Userbar name={user}/>
            <h1>This is after login page user is {user}</h1>


            {/* <Routes>
                <Route path="/afterlogin/profile" element={<Profile />}/>
            </Routes> */}
        </div>
    )
}