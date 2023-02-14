import React, {useState} from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from './Login/Login';
import Albums from './Albums/Albums';
import Context from './ContextFolder/Context';
import Photos from './Albums/Photos';
import './App.css'



function App() {

  const [userInfo, setUserInfo] = useState([]);

  return (
    <Context.Provider value={{userInfo , setUserInfo} }>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Login/>} />
          <Route path ="/Albums" element={<Albums/>} />
          <Route path ="/Albums/Photos" element={<Photos/>} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
