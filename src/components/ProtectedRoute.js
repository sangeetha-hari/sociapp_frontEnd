import React, { useState } from "react";
// import { UserAuthContexProvider } from "../context/UserAuthContext";
import Shorturl from "./Shorturl";
import { User, Loggedin } from "../context/UserAuthContext";
import AfterLogin from "./AfterLogin";

export default function ProtectedRoute(probs) {
  return (
    <div>
      <User.Provider value={"sangi"}>
        <Loggedin.Provider value={"yes"}>
          {probs.cmp === "Afterlogin" ? <AfterLogin/> : <h1>shorturl</h1>}
        </Loggedin.Provider>
      </User.Provider>

    
    </div>
  );
}
