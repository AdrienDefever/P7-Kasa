import React from 'react'
import "./Carrousel.css"
import { useState } from 'react';

function Carrousel(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

   const handlePrevClick = () => {
    if (currentImageIndex === 0) {
    // Si l'utilisateur se trouve à la première image, on affiche la dernière
    setCurrentImageIndex(props.images.length - 1);
    } else {
    setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentImageIndex === props.images.length - 1) {
    // Si l'utilisateur se trouve à la dernière image, on affiche la première
    setCurrentImageIndex(0);
    } else {
    setCurrentImageIndex(currentImageIndex + 1);
    }
  }

  
  return (

    <div className='apartment__banner'>
      <img src={props.images[currentImageIndex]} alt="appartement" />
      {props.images.length > 1 && (
      <div className='carrousel'> 
        <i className="fa-solid fa-less-than" onClick={handlePrevClick} ></i>
        <i className="fa-solid fa-greater-than" onClick={handleNextClick} ></i>
      </div>
      )}
      <div className='counter_carrousel'>{currentImageIndex +1} / {props.images.length}</div>
    </div>
    
  );
}
 
export default Carrousel

