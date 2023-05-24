import React from 'react'
import "./Collapse.css"
import { useState } from 'react';

function Collapse(props) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="apartment__item">
        <div className="apartment__item__title">
            <span>{props.title}</span>
            {isOpen ? (
          <i className="fa-solid fa-chevron-up" onClick={() => setIsOpen(false)}></i>
        ) : (
          <i className="fa-solid fa-chevron-down" onClick={() => setIsOpen(true)}></i>
        )}
        </div>
        { isOpen && <div className="content">{props.content}</div>}
        
    </div>

  )
}

export default Collapse






