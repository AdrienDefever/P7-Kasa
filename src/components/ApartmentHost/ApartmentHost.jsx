import React from 'react'
import "./ApartmentHost.css"

function ApartmentHost(props) {
  const ratingApartment = props.rating;
  const rating= [1, 2, 3, 4, 5];
  const completeName = props.name.split(" ");
  const firstName = completeName[0];
  const lastName = completeName[1];

  return (
    <div className="apartment__host">
        <div className="apartment__host__profile">
            <div className="apartment__host__name">
              <span>{firstName}</span>
              <span>{lastName}</span>   
            </div>
            <div className="apartment__host__picture">
              <img src={props.photo} alt="hôte"/>
            </div> 
        </div>
         <div className="apartment__host__rating">
         {rating.map((ratingElement) =>
                ratingApartment >= ratingElement ? (
                <span key={ratingElement.toString()}><i className="fa-solid fa-star"></i></span>
                ) : (
                  <span key={ratingElement.toString()}><i className="fa-regular fa-star"></i></span>
                )
            )}
        
        </div> 
    </div>
  )
}

export default ApartmentHost

