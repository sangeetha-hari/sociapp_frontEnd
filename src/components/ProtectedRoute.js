import React, { useState } from "react";
import AfterLogin from "./AfterLogin";
import MyAccount from "./MyAccount";
import Profile from "./Profile";

export default function ProtectedRoute(probs) {
  return (
    <div>
      {/* <User.Provider value={"sangi"}>
        <Loggedin.Provider value={"yes"}> */}
          {probs.cmp === "Afterlogin" ? <AfterLogin/> :
           probs.cmp === "Profile"? <Profile/> :
           probs.cmp === "MyAccount"?<MyAccount/> :<h1>shorturl</h1>}
        {/* </Loggedin.Provider>
      </User.Provider> */}

    
    </div>
  );
}
