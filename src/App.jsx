import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./Login/Login";
import Albums from "./Albums/Albums";
import { AuthContext, AuthProvider } from "./ContextFolder/Context";
import Photos from "./Albums/Photos";
import ProtectedRoutes from "./SecuredRoutes/ProtectedRoutes";
import "./App.css";

function App() {
  // const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.userinfo));
  // const [loginstats, setloginstats] = useState({isLogged:false});
  // const [userInfo, setUserInfo] = useState(
  //   (localStorage.getItem("userinfo") === null) ? "" :(JSON.parse(localStorage.userinfo)) );
  // const [logInfo, setlogInfo] = useState(
  //   (localStorage.getItem("userinfo") === null) ? true :false) ;
  //   const [userAuth, setuserAuth] = useState(
  // userAuth) ;
  // useEffect(()=>{
  //   try{
  //     setUserInfo(JSON.parse(localStorage.userinfo))
  //   }
  //   catch(err){
  //     // console.log(err);
  //   }
  // })
  // // console.log(userInfo);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/Albums" element={<Albums />} />
          <Route path="/Albums/Photos" element={<Photos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
