import React from 'react'
import './index.scss'
import { IoSearchSharp } from "react-icons/io5";
import PokemonImg from '../assets/pokemon-logo.svg'
import Card from '../components/Card'

const Header = () => {
  return (
    <main>
      <header className='header container'>
        <img src={PokemonImg} alt="pokemon-logo" />
        <div className='header-input'>
            <input type="text" placeholder='Nome ou Número'/>
            <button><IoSearchSharp className='search-btn' /></button>
        </div>
      </header>
      <section></section>
      <section className='container'>
        <Card></Card>
      </section>
    </main>
    
  )
}

export default Header