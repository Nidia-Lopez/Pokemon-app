import React from 'react';
import { link } from 'react-router-dom';
import Searchbar from './Searchbar';
import pokemonlogo from "../img/pokemonlogo.png";
import pokeball2 from "../img/pokeball2.png";

import './Style.css';

const Topbar = ({ }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand"><img className="i-logo" src={pokemonlogo} /></a>
          <div className="d-flex">



            <div className='container-search'>
              <Searchbar />
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}
export default Topbar;














