import React, { useEffect, useState } from 'react'
import './index.scss'
import { IoSearchSharp } from "react-icons/io5";
import PokemonImg from '../assets/pokemon-logo.svg'
import Card from '../components/Card'
import Filter from '../components/Filter'
import axios from 'axios'


const Header = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons()
    }, [])
    
    //API
  const getPokemons = () => {
    var endpoints = []
    for(var i=1; i < 151; i++){
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res)=> setPokemons(res))
  }

  const pokemonSearch = (name) => {
    var searchedPokemons = []
    if(name ===""){
      getPokemons()
    }
    for ( var i in pokemons) {
      if (pokemons [i].data.name.includes(name)){
        searchedPokemons.push(pokemons[i])
      }
    }
    setPokemons(searchedPokemons)
  }

  return (
    <main>
      <header className='header container'>
        <img src={PokemonImg} alt="pokemon-logo" />
        <div className='header-input pixel-corners'>
            <input onChange={(e) => pokemonSearch(e.target.value)} type="text" placeholder='Search...'/>
            <button><IoSearchSharp className='search-btn' /></button>
        </div>
      </header>
      <section className='filter-container container'>
        <Filter name={"All"}></Filter>
        <Filter name={"Bug"}></Filter>
        <Filter name={"Dark"}></Filter>
        <Filter name={"Dragon"}></Filter>
        <Filter name={"Electric"}></Filter>
        <Filter name={"Fairy"}></Filter>
        <Filter name={"Fighting"}></Filter>
        <Filter name={"Fire"}></Filter>
        <Filter name={"Flying"}></Filter>
        <Filter name={"Ghost"}></Filter>
        <Filter name={"Grass"}></Filter>
        <Filter name={"Ground"}></Filter>
        <Filter name={"Ice"}></Filter>
        <Filter name={"Normal"}></Filter>
        <Filter name={"Poison"}></Filter>
        <Filter name={"Psyquic"}></Filter>
        <Filter name={"Rock"}></Filter>
        <Filter name={"Steel"}></Filter>
        <Filter name={"Water"}></Filter>
      </section>
      <section className='card-box container'>
        <div className='card-container' >
          {pokemons.map((pokemon) => (
            <Card image={pokemon.data.sprites.front_default} id={pokemon.data.id} name={pokemon.data.name} types={pokemon.data.types}></Card>
          ))}
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