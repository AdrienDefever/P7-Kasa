import React from 'react'
import Collapse from '../Collapse/Collapse'
import "./APropos.css"
import aboutBanner from "../../assets/image/aboutBanner.png"


function APropos() {

  const contentFiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes";
  const contentRespect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme";
  const contentService = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas nous contacter si vous avez la moindre question";
  const contentSecurite= "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

  return (
    <div className='about'>
        <img src={aboutBanner} alt="aboutBanner" />
        <div className='about__container'>
        <Collapse title="Fiabilité" content={contentFiabilite} />
        <Collapse title="Respect" content={contentRespect}/>
        <Collapse title="Service" content={contentService} />
        <Collapse title="Sécurité" content={contentSecurite} />
        </div>
    </div>
  )
}

export default APropos