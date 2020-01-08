import React, { Component } from 'react';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container" data-test="component-app">
        <header className="App-header">
          <h1>Jotto App</h1>
          <Congrats success={true} />
          <GuessedWords guessedWords={[{ guessedWord: 'train', letterMatchCount: 0 }]} />
        </header>
      </div>
    );
  }
}
