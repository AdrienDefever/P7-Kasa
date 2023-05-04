import React from 'react'
import "./Collapse.css"
import { useState } from 'react';

function Collapse(props) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="apartment__item">
        <p className="apartment__item__title">
            <span>{props.title}</span>
            {isOpen ? (
          <i className="fa-solid fa-chevron-up" onClick={() => setIsOpen(false)}></i>
        ) : (
          <i className="fa-solid fa-chevron-down" onClick={() => setIsOpen(true)}></i>
        )}
        </p>
        { isOpen && <p className="content">{props.content}</p>}
        
    </div>

  )
}

export default Collapse


// <i className="fa-solid fa-chevron-down" onClick={Collapse}></i>
// <p className="content">{props.content}</p>



//fonction pour gérer l'afichage du contenu des collapses



