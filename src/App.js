
import Footer from './Components/footer'
import React from 'react'
import Header from "./Components/header";

import { Routes, Route } from 'react-router-dom'
import { AboutMe } from "./Components/AboutMe"
import { Contact } from "./Components/Contact"
import { Portfolio } from "./Components/Partfolio"
import { Resume } from './Components/Resume'


function App() {
  return (
    
    
    
        <>
          <div className='App'>
            <Header />
            
            <Routes>
              <Route path="/" element={<AboutMe />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/portfolio" element={<Portfolio />}></Route>
              <Route path="/resume" element={<Resume />}></Route>
            </Routes>
            <Footer />
          </div>
        </>
  )
        
}

export default App;
