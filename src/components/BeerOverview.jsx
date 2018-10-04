import React, { Component } from 'react';
import { BEERDB } from '../beerDatabase';
import BeerCard from './BeerCard';
import '../styles/BeerOverview.css';

class BeerOverview extends Component {
  createBeerOverwiew = () => {
    let view = [];
    for (let beer in BEERDB) {
      view.push(<BeerCard beer={BEERDB[beer]} />);
    }
    return view;
  };

  render() {
    return <div className="beer-overview">{this.createBeerOverwiew()}</div>;
  }
}

export default BeerOverview;
