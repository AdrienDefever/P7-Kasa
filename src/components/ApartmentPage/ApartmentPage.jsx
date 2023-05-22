import Carrousel from "../Carrousel/Carrousel.jsx"
import Collapse from "../Collapse/Collapse.jsx"
import ApartmentPlace from "../ApartmentPlace/ApartmentPlace.jsx"
import "./ApartmentPage.css"
import ApartmentHost from "../ApartmentHost/ApartmentHost.jsx"
import {useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import {getApartmentById} from '../../data/services.js'


function ApartmentPage() {
  
  const [selectedApartment, setSelectedApartment] = useState(null);
 
  //const params = useParams();
  //const id = params.id;
  //en utilisant l'affectation par decomposition:
  const {id}= useParams();
  const navigate = useNavigate();

 
  useEffect(() => {
    getApartmentById(id)
      .then((apartment) => {
        if (apartment) {
          setSelectedApartment(apartment);
        } else {
          navigate(`/error?id=${id}`);
        }
      })
      .catch((error) => console.log(error));
  }, [id, navigate]);

  if (!selectedApartment) return <div>loading</div>;

   
  
  return (
    <div className="apartment-page">
        <Carrousel imageUrl={selectedApartment.cover} images={selectedApartment.pictures} />
        <div className="apartment__main__info">
            <ApartmentPlace title = {selectedApartment.title} location = {selectedApartment.location} tags = {selectedApartment.tags} />
            <ApartmentHost name = {selectedApartment.host.name} photo ={selectedApartment.host.picture} rating ={selectedApartment.rating}/>
        </div>
        <div className="apartment__items">
            <Collapse title="Description" content ={selectedApartment.description}/>
            <Collapse title="Equipements" content ={selectedApartment.equipments.map((equipment, index) => (<ul key={index}>{equipment}</ul>))} />
        </div>
    </div>

  )
}

export default ApartmentPage
