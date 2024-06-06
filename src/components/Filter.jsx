import React from 'react'
import './Filter.scss'

const Filter = ({name}) => {
  return (
    <>
        <button className='filter pixel-corners'>{name}</button>
    </>
  )
}

export default Filter