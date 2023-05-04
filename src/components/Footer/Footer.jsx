import "./Footer.css"
import LogoKasaBlack from "../../assets/image/Kasa black.png"

import React from 'react'

function Footer() {
  return (
    <div className="footer">
        <div className="footer_logo">
            <img src={LogoKasaBlack} alt="logo Kasa" />
        </div>
        <div className="text__footer"> © 2020 Kasa. All rights reserved</div>
    </div>
  )
}

export default Footer