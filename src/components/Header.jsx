import React, { Component } from 'react';
import NavigationTab from './NavigationTab';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <NavigationTab className="App-Header" />
      </div>
    );
  }
}

export default Header;
