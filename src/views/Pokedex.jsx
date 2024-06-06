import React from 'react'
import './index.scss'
import { IoSearchSharp } from "react-icons/io5";
import PokemonImg from '../assets/pokemon-logo.svg'
import Card from '../components/Card'
import Filter from '../components/Filter'
import axios from 'axios'


const Header = () => {
  
  axios.get('https://pokeapi.co/api/v2/pokemon/')
  .then(response => {
      // Access the response data
      const responseData = response.data;
      console.log(responseData)
      // Process the response data here
  })
  .catch(error => {
      console.log('error')
  });

  return (
    <main>
      <header className='header container'>
        <img src={PokemonImg} alt="pokemon-logo" />
        <div className='header-input pixel-corners'>
            <input type="text" placeholder='Nome ou Número'/>
            <button><IoSearchSharp className='search-btn' /></button>
        </div>
      </header>
      <section className='filter-container container'>
        <Filter name={"Todos"}></Filter>
        <Filter name={"Água"}></Filter>
        <Filter name={"Bug"}></Filter>
        <Filter name={"Dark"}></Filter>
        <Filter name={"Dragão"}></Filter>
        <Filter name={"Electric"}></Filter>
        <Filter name={"Fada"}></Filter>
        <Filter name={"Fogo"}></Filter>
        <Filter name={"Flying"}></Filter>
        <Filter name={"Ghost"}></Filter>
        <Filter name={"Ground"}></Filter>
        <Filter name={"Ice"}></Filter>
        <Filter name={"Luta"}></Filter>
        <Filter name={"Normal"}></Filter>
        <Filter name={"Planta"}></Filter>
        <Filter name={"Poison"}></Filter>
        <Filter name={"Psíquico"}></Filter>
        <Filter name={"Rock"}></Filter>
        <Filter name={"Steel"}></Filter>
      </section>
      <section className='card-box container'>
        <div className='card-container' >
        <Card pokemonImage='' pokemonId='0001' pokemonName='Pikachu' pokemonType1='electric' pokemonType2='Electric'></Card>
        </div>
        <button className='card-btn pixel-corners'>Ver mais</button>
      </section>
      <footer>
        <div className='container'>
          <p>©2024 Maria Júlia Miosso</p>
        </div>
      </footer>
    </main>
    
  )
}

export default Header