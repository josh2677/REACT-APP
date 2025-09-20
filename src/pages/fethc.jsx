import React from 'react'
import { useState, useEffect } from 'react'
function Fethc() {

     const [pokemon, setPokemon] = useState([])
      async function FetchData() {
        const response =  await fetch("https://pokeapi.co/api/v2/pokemon?offset=01&limit=60")
        const result = await response.json()
        console.log(result.results)
        setPokemon(result.results)
     }

     useEffect(()=>{
FetchData()
     },[])


     
  return (
    <div>
      <p>Pokemon</p>
      <ul>
      {pokemon.map((p,index)=>(
        <li key={index}>{p.name}</li>
      ))}

      {pokemon.map((p,index)=>(
        <li key={index}>{p.url}</li>
      ))}
      </ul>
      <div>


        
      </div>
    </div>
  )
}

export default Fethc