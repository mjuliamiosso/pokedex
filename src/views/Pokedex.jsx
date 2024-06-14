import React, { useEffect, useState } from 'react'
import './index.scss'
import { IoSearchSharp } from "react-icons/io5";
import PokemonImg from '../assets/pokemon-logo.svg'
import Card from '../components/Card'
import axios from 'axios'
import Skeleton from '../components/Skeleton';
// import Filter from '../components/Filter'


const Header = () => {
  const colors = {
    bug: "#5F8359",
    dark: "#808080",
    dragon: "linear-gradient(180deg, rgba(91,163,229,1) 0%, rgba(229,80,80,1) 100%)",
    electric: "#F2C85D",
    fairy: "#FCA1B1",
    fighting: "#BE6423",
    fire: "#F98544",
    flying: "linear-gradient(180deg, rgba(68,168,225,1) 0%, rgba(175,175,175,1) 100%)",
    ghost: "#8761A5",
    grass: "#8BCB75",
    ground: "linear-gradient(180deg, rgba(241,192,65,1) 0%, rgba(119,95,48,1) 100%);",
    ice: "#4EC3E8",
    normal: "#C8C8C8",
    poison: "#C690D9",
    psyquic: "#FF78C1",
    rock: "#AE8B46",
    steel: "#B0B9C8",
    water: "#5596E2"
  }

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons()
    }, [])
    
    //API
  const getPokemons = () => {
    var endpoints = []
    for(var i=1; i < 1026; i++){
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
            <span><IoSearchSharp className='search-btn' /></span>
        </div>
      </header>
      {/* <section className='filter-container container'>
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
      </section> */}
      <section className='card-box container'>
        <div className='card-container' >
           {pokemons.length === 0 ?<Skeleton/> :
            pokemons.map((pokemon) => (
              <Card image={pokemon.data.sprites.front_default} id={pokemon.data.id} name={pokemon.data.name} types={pokemon.data.types}></Card>
            ))
          }
        </div>

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