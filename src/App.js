import "./App.css";
import Resetpass from "./components/Resetpass";
import { Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
// import ResetAuth from "./Forgot_password";
// import { date } from "yup/lib/locale";
// import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Container from '@mui/material/Container';
// import IconButton from "@mui/material/IconButton";
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Register from "./components/Register";
import Login from "./components/Login";
import Checkmail from "./components/Checkmail";
import Forgot_password from "./components/Forgot_password";
// import { Button } from "@mui/material";
// import Dashboard from "./components/Dashboard";
// import Shorturl from "./components/Shorturl";
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute"
// import {UserAuthContexProvider} from "./context/UserAuthContext" 
// import AfterLogin from "./components/AfterLogin";
// import Profile from "./components/Profile";
// import Userbar from "./components/Userbar";
// import { User, Loggedin } from "../context/UserAuthContext";
import {User,Loggedin} from "./context/UserAuthContext"
import Notfound from "./components/Notfound";
// const log= false;

function App() {
// const [name,setName]=useState("");
// const [islogged,setLogged]=useState(false);
 
  return (
    <div className="App">
      {/* <UserAuthContexProvider>  */}
      <Box md={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <AppBar position="static">
        <Toolbar  disableGutters>
          <Typography variant="h6" color="inherit" component="div" className='toolbar' >
          <a className='toolbar' href="/home">Home</a>  
          </Typography>
          <Typography variant="h6" color="inherit" component="div" className='toolbar'>
          <a className='toolbar'href="/login">Login</a>  
          </Typography>
          <Typography variant="h6" color="inherit" component="div" className='toolbar'>
          <a className='toolbar'href="/register">Register</a>  
          </Typography>
        </Toolbar>

        {/* {log?<Userbar/>:""} */}
      </AppBar>
    </Box>
    {/* </UserAuthContexProvider>  */}
  

  

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot_password" element={<Forgot_password />} />
        <Route path="/resetpassword" element={<Resetpass />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkmail" element={<Checkmail />} />
        
{/* This is protected route link */}
        <Route path="/dashboard" element={<ProtectedRoute cmp="Dashboard" />} />
       
        <Route path="/shorturl" element={<ProtectedRoute cmp="Shorturl" />}  />
        <Route path="/afterlogin" element={<ProtectedRoute cmp="Afterlogin" />} />
        {/* <Route path="/afterlogin/profile" element={<ProtectedRoute cmp="Afterlogin" />} /> */} */}
         {/* <Route path="/afterlogin/profile" element={<Profile />}/> */}
         <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
