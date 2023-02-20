import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./Login/Login";
import Albums from "./Albums/Albums";
import AuthContext from "./ContextFolder/Context";
import Photos from "./Albums/Photos";
import ProtectedRoutes from "./SecuredRoutes/ProtectedRoutes";
import "./App.css";

function App() {

  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("userinfo") === null
      ? ""
      : JSON.parse(localStorage.userinfo)
  );

  // const [userInfo, setUserInfo] = useState(
  //   localStorage.getItem("userinfo") === null
  //     ? ""
  //     : JSON.parse(localStorage.userinfo)
  // );

  const[isLogged , setisLogged]=useState(
    userInfo
    ? true
    : false
  )



  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo,isLogged , setisLogged }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/Albums" element={<Albums />} />
            <Route path="/Albums/Photos" element={<Photos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
