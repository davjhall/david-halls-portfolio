import Layout from './Components/Layout'
import './App.scss'
import React from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import AboutMe from "./Components/AboutMe"
import { Contact } from "./Components/Contact"
import { Portfolio } from "./Components/Partfolio"
import { Resume } from './Components/Resume'


function App() {
  return (
    
        <>
          <div className='App'>
            <li><Link to="/contact">Contact Me</Link></li>
            <li><Link to="/">About David Hall</Link></li>
            <li><Link to="/resume">My Resume</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <Routes>
              <Route path="/" element={<Layout />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/portfolio" element={<Portfolio />}></Route>
              <Route path="/resume" element={<Resume />}></Route>
            </Routes>
          </div>
        </>
  )
        
}

export default App;
