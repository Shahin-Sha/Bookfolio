import React from 'react'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import HomeAdmin from "./Pages/HomeAdmin";

export default function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/HomeAdmin" element={<HomeAdmin />} />
      </Routes>

    </div>
  )
}
