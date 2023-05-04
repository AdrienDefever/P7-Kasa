import React from 'react'
import "./ApartmentPlace.css"

function AppartmentPlace(props) {

  return (
    <div className="apartment__place">
        <h1 className="apartment__place__title">{props.title}</h1>
        <h2 className="apartment__place__location">{props.location}</h2>
        <div className="apartment__place__tag">
        {props.tags.map((tag) => (<p key={tag.toString()}>{tag}</p>))}  
        </div>
    </div>
  )
}

export default AppartmentPlace