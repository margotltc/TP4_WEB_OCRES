/*import logo from './logo.svg';*/
import React, { useState } from 'react';
import './App.css';
import Button from './Button.js';
import User from './User.js';
import Header from './Header.js';

const profils = [
  {
    prenom: "Margot",
    nom: "Lutic",
    dateNaissance: "02/02/2000",
    image: "photo_cv.JPG",
    dernierPost: "blabla"
  },
  {
    prenom: "Flavien",
    nom: "Barreira",
    dateNaissance: "05/11/1999",
    image: "photo_cv.JPG",
    dernierPost: "blabla"
  },
  {
    prenom: "Titi",
    nom: "Nini",
    dateNaissance: "08/04/2000",
    image: "photo_cv.JPG",
    dernierPost: "blabla"
  }
];
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        prenom: profils[0].prenom,
        nom: profils[0].nom,
        dateNaissance: profils[0].dateNaissance,
        image: profils[0].image,
        dernierPost: profils[0].dernierPost,
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Button name={"Margot"} onClick={() => this.switchProfile(0)} />
        <Button name={"Flavien"} onClick={() => this.switchProfile(1)} />
        <Button name={"Titi"} onClick={() => this.switchProfile(2)} />
        <User prenom={this.state.prenom}
              nom={this.state.nom}
              dateNaissance={this.state.dateNaissance}
              image={this.state.image}
              dernierPost={this.state.dernierPost}
        />
      </div>
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/
    );
  }

switchProfile(i) {
    this.setState({ prenom: profils[i].prenom });
    this.setState({ nom: profils[i].nom });
    this.setState({ dateNaissance: profils[i].dateNaissance });
    this.setState({ image: profils[i].image });
    this.setState({ dernierPost: profils[i].dernierPost });
  }
}
