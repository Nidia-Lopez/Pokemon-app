import React, { Component } from 'react';

import Display from './Display';
export default class searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBy: '',
      pokemons: []
    }
  }

  asyncfetchApiPokemonsDefault = async () => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    let data = await res.json();
    this.setState({
      pokemons: data.results
    })
  }

  fetchApiPokemonsByType = async () => {
    let res = await fetch(`https://pokeapi.co/api/v2/type/${this.state.pokemonType}`);
    let data = await res.json()
    console.log('fetchApiPokemonsByType');
    console.log(data);
    this.setState({
      pokemons: data.pokemon
    })
  }
  fetchApiPokemonByName = async () => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.inputName}`);
    let data = await res.json()
    data.url = `https://pokeapi.co/api/v2/pokemon/${this.state.inputName}`
    console.log("fetchApiPokemonByName");
    console.log(data);
    this.setState({
      pokemons: [data]
    })
  }

  handleName = e => {
    this.setState({
      inputName: e.target.value.toLowerCase()
    })
  }

  handleSearchBy = (e, value) => {
    this.setState({
      searchBy: value
    })
    this.setState({
      searchByText: e.target.textContent
    })
  }

  handlePokemonType = (e, value) => {
    this.setState({
      pokemonType: value
    })
    this.setState({
      pokemonTypeText: e.target.textContent
    })
  }
  handleSubmit = e => {
    console.log('handleSubmit');
    console.log(this.state.searchBy);
    e.preventDefault();
    switch (this.state.searchBy) {
      case 'name':
        this.fetchApiPokemonByName();
        break;
      case 'type':
        this.fetchApiPokemonsByType();
        break;
    }
  }

  async componentDidMount() {
    await this.asyncfetchApiPokemonsDefault();
  }
  render() {

    return (
      <div className="searchbar">
        <li className="nav-item dropdown">

          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {this.state.searchByText ? this.state.searchByText : "Search Type"}
          </a>
          <ul className="dropdown-menu">
            <li><a class="dropdown-item" href="#" onClick={(e) => this.handleSearchBy(e, 'name')}>Pokemon Name</a></li>
            <li><a class="dropdown-item" href="#" onClick={(e) => this.handleSearchBy(e, 'type')}>Pokemon Type</a></li>

          </ul>
        </li>
        <form onSubmit={this.handleSubmit}>
          {this.state.searchBy == "name" &&
            <input type="text"
              placeholder='Enter a pokemon name'
              value={this.state.inputName}
              onChange={this.handleName}
            />
          }

          {this.state.searchBy == "type" &&
            <li className="nav-item dropdown">
              <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {this.state.pokemonTypeText ? this.state.pokemonTypeText : "Which pokemon type?"}
              </a>
              <ul className="dropdown-menu">
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 1)}>Normal</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 2)}>Fighting</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 3)}>Flying</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 4)}>Poison</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 5)}>Ground</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 6)}>Rock</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 7)}>Bug</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 8)}>Ghost</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 9)}>Steel</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 10)}>Fire</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 11)}>Water</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 12)}>Grass</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 13)}>Electric</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 14)}>Psychic</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 15)}>Ice</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 16)}>Dragon</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 17)}>Dark</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 18)}>Fairy</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 19)}>Unkown</a></li>
                <li><a class="dropdown-item" href="#" onClick={(e) => this.handlePokemonType(e, 20)}>Shadow</a></li>
              </ul>
            </li>
          }



          <button type='submit' className='btn btn-primary'>Search</button>

          <Display pokemon={this.state.pokemons} searchBy={this.state.searchBy}></Display>

        </form>
      </div>
    );
  }
}