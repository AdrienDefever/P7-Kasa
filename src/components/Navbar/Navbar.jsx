import React from 'react'
import "./Navbar.css"
import {NavLink} from "react-router-dom"
import LogoKasa from "../../assets/image/Kasa.png"

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar__logo'>
            <img src = {LogoKasa} alt="Logo Kasa" />
        </div>
        <NavLink to="/">
        <div>Accueil</div>
        </NavLink>
        <NavLink to="/APropos">
            <div>A Propos</div>
        </NavLink>
    </nav>
  )
}

export default Navbar