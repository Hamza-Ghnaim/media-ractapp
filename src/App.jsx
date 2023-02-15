import React, {useState} from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from './Login/Login';
import Albums from './Albums/Albums';
import Context from './ContextFolder/Context';
import Photos from './Albums/Photos';
import ProtectedRoutes from './SecuredRoutes/ProtectedRoutes';
import './App.css'



function App() {
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.userinfo));
  const [loginstats, setloginstats] = useState({isLogged:false});
  // const [userInfo, setUserInfo] = useState("");
  // useEffect(()=>{
  //   try{
  //     setUserInfo(JSON.parse(localStorage.userinfo))
  //   }
  //   catch(err){
  //     // console.log(err);
  //   }
  // }, [userInfo])    
  // console.log(userInfo);

  return (
    <Context.Provider value={{userInfo , setUserInfo,loginstats, setloginstats} }>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Login/>} />
          <Route element={<ProtectedRoutes/>}>
            <Route path ="/Albums" element={<Albums/>} />
            <Route path ="/Albums/Photos" element={<Photos/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
