
import './App.css'
import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import AboutMe from "./Components/AboutMe"
import { Contact } from "./Components/Contact"
import { Portfolio } from "./Components/Partfolio"


function App() {
  return (
    
        <>
          <div className='App'>
            <Routes>
              <Route path="/" element={<AboutMe />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/portfolio" element={<Portfolio />}></Route>
            </Routes>
          </div>
        </>
  )
        
}

export default App;
