import React from 'react'
import "./Banner.css"
import BannerHome from "../../assets/image/banner.png"

function Banner() {
  return (
    <div className='banner'>
        <img src={BannerHome} alt="Banner" />
        <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner

