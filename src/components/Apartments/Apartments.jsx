import React, { useEffect, useState } from 'react'
import "./Apartments.css"
import CardApartment from '../CardApartment/CardApartment.jsx'
import {getAllApartments} from '../../data/services'

function Apartments() {
  
 const [apartments, setapartments] = useState([])

 useEffect(() => {
        getAllApartments()
        .then((res) => setapartments(res))
        .catch((error) => console.log(error))
    }, [])
  

 return (
    <div className="appartments">
        {apartments.map((element, index) => (<CardApartment key={index} title = {element.title} imageUrl={element.cover} id ={element.id} />))}
        
    </div>

  )
}

export default Apartments

