
import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Contact } from "./Pages/Contact"

function App() {
  return (
    
        <>
        <nav>
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/contact">My Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path='/contact' elements={<Contact />} />
        </Routes>
        </>
  )
        
}

export default App;
