import React, { Component } from 'react';
import './App.css';
import Letter from '../Letter/Letter.js'
import Keyboard from '../Keyboard/Keyboard.js'
import Counter from '../Counter/Counter.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const allword = ["NOMBRE","GEANTE","CORAUX","ROULEAU","EJECTER","LIVRETS",
              "DIVISION","LICORNES","FOURNEAU","EMPLETTE","CLEPSYDRE","INDIGENES",
              "ECLATANTE","MATERIAUX","ANAGRAMME","ULTERIEURE","FACTORISER",
              "RACCROCHER","HIPPOPOTAME","SAUTERELLES"]

class App extends Component {
  state = {
    letters: this.generateWords(),
    keyboard : this.generateKeyboard(),
    selection : [],
    gameState : "en cours",
  }

  generateWords() {
    const result = []
    let oneWord = Math.floor(Math.random()* allword.length)
    oneWord = allword[oneWord]
    const word = oneWord.split('')
    while (word.length>0) {
      const letter = word.shift()
      result.push(letter)
    }
    return result
  }

  generateKeyboard() {
    const result = []
    const size = 26
    const allLetters = alphabet.split('')
    while (result.length < size) {
      const letter = allLetters.shift()
      result.push(letter)
    }
    return result
  }

  getFeedback(letter) {
    const { selection } = this.state
    return selection.includes(letter)
  }

  handleClick = letter => {
    const { selection, gameState } = this.state
    if(gameState == "en cours") {
      this.setState({selection: [...selection, letter]}, this.gameState)
    }
  }

  newGame = () => {
    this.setState({selection: [], letters: this.generateWords(), gameState : "en cours" })
  }

  trying = () => {
    const {letters, selection} = this.state
    return selection.filter(elt => !letters.includes(elt)).length
  }

  gameState = () => {
    const {letters, selection} = this.state
    const lastTests = 10 - this.trying()
    const findWord = letters.filter(elt => selection.includes(elt)).length === letters.length
    if (lastTests > 0 && findWord) {
      this.setState({gameState : "gagnée"})
    } else if (lastTests > 0 ) {
      return
    } else {
      this.setState({gameState : "perdue"})
    }
  }

  render() {
    const { letters, keyboard } = this.state

    return (
      <div className="hangman">
        <div className="header">
          <h1 className="title">Jeu du pendu</h1>
          <button className="btn btn-info" onClick={this.newGame}>Nouvelle partie</button>
        </div>
        <div className="game">
          <div className="content">
            { letters.map((letter, index) => (
              <Letter
                letter={letter}
                feedback={this.getFeedback(letter) ? "visible" : "hidden"}
                key={index}
              />
            ))}
          </div>
            <Counter
              counter = {this.trying()}
              gameState = {this.state.gameState}
              />
        </div>

        <div className="keyboard">
          { keyboard.map((letter, index) => (
            <Keyboard
              letter={letter}
              key={index}
              onClick={this.handleClick}
              feedback={this.getFeedback(letter) ? "gray" : "#17a2b8"}
              />
          ))}
        </div>
      </div>

    )
  }
}

export default App;
