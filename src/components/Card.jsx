import React from 'react'
import Pikachu from '../assets/pikachu.png'
import './Card.scss'

const Card = ({pokemonImg}) => {
  return (
    <div className='card'>
        <img src={Pikachu}/>
        <p className='card-id'>Nº 0025</p>
        <h1 className='card-name'>Pikachu</h1>
        <div className='card-types'>
          <p>Electric</p>
          <p>Electric</p>
        </div>
    </div>
  )
}

export default Card