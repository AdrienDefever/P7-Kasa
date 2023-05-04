import Carrousel from "../Carrousel/Carrousel.jsx"
import Collapse from "../Collapse/Collapse.jsx"
import ApartmentPlace from "../ApartmentPlace/ApartmentPlace.jsx"
import "./ApartmentPage.css"
import ApartmentHost from "../ApartmentHost/ApartmentHost.jsx"
import {useParams } from "react-router-dom"
import React, { useEffect, useState } from 'react'



function ApartmentPage() {
  
  const [selectedApartment, setSelectedApartment] = useState(null);
  const {id}= useParams();
  console.log(id)
 
  useEffect(() => {
    fetch("/apartments.json")
      .then((response) => response.json())
      .then((apartments) => {
        const apartment = apartments.find((apartment) => apartment.id === id);
        setSelectedApartment(apartment);
      })
      .catch((error) => console.log(error));
    },[]);
  
    console.log(selectedApartment)

  if (selectedApartment == null) return <div>loading</div>

  return (
    <div className="apartment-page">
        <Carrousel imageUrl={selectedApartment.cover} images={selectedApartment.pictures} />
        <div className="apartment__main__info">
            <ApartmentPlace title = {selectedApartment.title} location = {selectedApartment.location} tags = {selectedApartment.tags} />
            <ApartmentHost name = {selectedApartment.host.name} photo ={selectedApartment.host.picture} rating ={selectedApartment.rating}/>
        </div>
        <div className="apartment__items">
            <Collapse title="Description" content ={selectedApartment.description}/>
            <Collapse title="Equipements" content ={selectedApartment.equipments.map((equipment) => (<ul>{equipment}</ul>))} />
        </div>
    </div>

  )
}

export default ApartmentPage