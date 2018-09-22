import React, { Component } from 'react';
import '../styles/Home.css';
import nuglar from '../assets/Nuglar_Pantaleon.jpg';
import sortiment from '../assets/sortiment.png';

class Home extends Component {
  render() {
    return (
      <div>
        <img className="HomeBackground" src={nuglar} alt="Herrenberg" />
        <img src={sortiment} className="beer" />
      </div>
    );
  }
}

export default Home;
