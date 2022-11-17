import React from "react"
import {Routes, Route } from 'react-router-dom'
import Formulario from "./components/formulario"

export function App() {
  return (
    <Routes>
    <Route
      index
      path="/"
      element={
        
        <div className="container mx-auto object-contain object-center mt-20 w-96 h-144 "> <Formulario /> </div>  
    }
    />
  </Routes>
   
  )
}
