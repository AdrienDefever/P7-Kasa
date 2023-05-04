import React from 'react'
import Navbar from "../Navbar/Navbar.jsx"
import { Link } from 'react-router-dom'
import "./PageError.css"

function PageError() {
  return (
    <div>
        <Navbar />
        <div className='pageError'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to = {'/'}>
                <h3>Retourner sur la page d'accueil</h3>
            </Link>
        </div>
    </div>
  )
}

export default PageError