import "./CardApartment.css"
import {Link} from "react-router-dom"
import React from 'react'


function CardApartment(props) {

  return (
    <div className="apartment">
      <Link to={`/ApartmentPage/${props.id}`}>
        <img src= {props.imageUrl} alt="" />
        <div className="titre__location">{props.title}</div>
      </Link>
    </div>
  )
}

export default CardApartment