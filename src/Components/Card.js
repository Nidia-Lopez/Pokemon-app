import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Style.css';
import * as common from '../common.js'
export default function
  Card({ thisPokemon, searchBy }) {

  const [onePokemon, setOnePokemon] = useState({
    name: "",
    sprites: {
      front_default: "#"
    }
  })
  const getPokemon = (url) => {
    axios.get(url)
      .then((response) => {
        console.log('getPokemon in card')
        console.log(response)
        setOnePokemon(response.data)
      })
      .catch((err) => {
        console.log("Something failed")
      })
  }


  useEffect(() => {
    if (searchBy == '') {
      getPokemon(thisPokemon.url);
    }
    else if (searchBy == 'type') {
      getPokemon(thisPokemon.pokemon.url);
    }
    else if (searchBy == 'name') {
      thisPokemon.url = "https://pokeapi.co/api/v2/pokemon/" + thisPokemon.name;
      getPokemon(thisPokemon.url)
    }
  }, [thisPokemon])


  return (
    <div className='cards-container'>
      <div className="card">

        <div className='card_title'>
          <div className="card_body">
            <p className="text-p">{common.capitalizeFirstLetter(onePokemon.name)}</p>
            <div className="card_image"><img src={onePokemon.sprites.front_default} alt="#" /></div>

            <p className="text-p"> Height: {onePokemon.height}</p>

          </div>
        </div>
      </div>
    </div>
  )
}

