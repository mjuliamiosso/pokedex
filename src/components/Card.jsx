import React from 'react'
import './Card.scss'

const Card = ({image, id, name, types}) => {
  const typeHandler = ( ) => {
    if(types[1]) {
      return types[1].type.name
    }
    return 
  }

  return (
    <div className='card pixel-corners'>
        <img src={image}/>
        <p className='card-id'>Nº {id}</p>
        <h1 className='card-name'>{name}</h1>
        <div className='card-types'>
          <p>{types[0].type.name}</p>
          <p>{typeHandler()}</p>
        </div>
    </div>
  )
}

export default Card