import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from './Login/Login';
import Albums from './Albums/Albums';
import Photos from './Albums/Photos';
import './App.css'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Login/>} />
        <Route path ="/Albums" element={<Albums/>} />
        <Route path ="/Albums/Photos" element={<Photos/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
