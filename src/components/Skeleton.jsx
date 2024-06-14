import React from 'react'
import './Skeleton.scss'
import GreyBlock from '../assets/grey-block.png'

const Skeleton = () => {
  return (
    <div className='skeleton pixel-corners'>
        <div>
            <img src={GreyBlock} alt="" />
            <p className='card-id'>Nº ---</p>
            <h1 className='card-name'>---</h1>
            <div className='card-types'>
                <p>---</p>
                <p>---</p>
            </div>
        </div>
       
    </div>
  )
}

export default Skeleton