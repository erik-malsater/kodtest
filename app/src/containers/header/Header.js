import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
  render() {
    return(
      <header>
        <h1>Pricerunner</h1>
        <div className="header__mobileContainer">
          <img src={require("../../images/search-icon.png")} alt="Search icon" className="header__mobileIcon"/>
          <img src={require("../../images/menu-icon.png")} alt="Menu icon" className="header__mobileIcon"/>
        </div>
        <div className="header__desktopContainer">
          <img src={require("../../images/search-icon.png")} alt="Search icon" className="header__inputIcon"/>
          <input type="text" placeholder="Vad letar du efter idag?"/>
          <nav>
            <h2>Produkter</h2>
            <span className="header__verticalLine"></span>
            <h2>Experttester</h2>
            <h2>Guider</h2>
            <h2>Rabattkoder</h2>
            <h2>Rea</h2>
            <span className="header__verticalLine"></span>
            <h2>Logga in</h2>
            <h2 id="header__heading--red">Bli medlem</h2>
          </nav>
        </div>
      </header>
    )
  }
}