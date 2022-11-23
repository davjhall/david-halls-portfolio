import { Link, NavLink } from 'react-router-dom'


import { faHome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Sidebar() {(
return <div className='nav-bar'>
    <Link className='logo' to='/'> 
    <img src={ require('../../images/cuslogo.png') } alt="logo" />
    </Link>
    <nav />
    <NavLink exact="ture" activeclassname="active" to="/" />
    <FontAwesomeIcon icon={faHome} color="4d4d4e"
    
)}