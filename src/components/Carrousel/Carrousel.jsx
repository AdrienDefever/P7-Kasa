import React from 'react'
import "./Carrousel.css"
import { useState } from 'react';
import { useEffect } from 'react';

function Carrousel(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [isPrevDisabled, setIsPrevDisabled] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  useEffect(() => {
    if (props.images.length === 1) {
        // Si la galerie n'a qu'une seule image, on désactive les boutons précédent/suivant
        setIsPrevDisabled(true);
        setIsNextDisabled(true);
    } else {
        setIsPrevDisabled(false);
        setIsNextDisabled(false);
    }
    }, [props.images]);


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

  
  const imageAffichee = currentImageIndex +1

  return (

    <div className='apartment__banner'>
      <img src={props.images[currentImageIndex]} alt="appartement" />
      {props.images.length > 1 && (
      <div className='carrousel'> 
        <i class="fa-solid fa-less-than" onClick={handlePrevClick} disabled={isPrevDisabled}></i>
        <i class="fa-solid fa-greater-than" onClick={handleNextClick} disabled={isNextDisabled}></i>
      </div>
      )}
      <div className='counter_carrousel'>{imageAffichee} / {props.images.length}</div>
    </div>
    
  );
}

 
export default Carrousel