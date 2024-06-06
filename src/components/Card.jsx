import React from 'react'
import './Card.scss'

const Card = ({pokemonImage, pokemonId, pokemonName, pokemonType1, pokemonType2}) => {
  return (
    <div className='card pixel-corners'>
        <img src={pokemonImage}/>
        <p className='card-id'>{pokemonId}</p>
        <h1 className='card-name'>{pokemonName}</h1>
        <div className='card-types'>
          <p>{pokemonType1}</p>
          <p>{pokemonType2}</p>
        </div>
    </div>
  )
}

export default Card