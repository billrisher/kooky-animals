import React, { Component } from 'react';
import './App.css';

let animals = require("./animal-list.json");
let verb = require("./verb-list.json");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animalNum: 0,
      verbNum: 0
    };
    this.handleClick = this.handleClick.bind(this); 
  }
  handleClick() {
    let randomFromList = (list) => {
      return Math.floor(Math.random() * list.length);
    } 
    this.setState({animalNum: randomFromList(animals),
                  verbNum: randomFromList(verb.verbs)});
  }
  render() {
    return (
      <div className="App">
        <p className="Text">A <span className="Generated">{animals[this.state.animalNum]}</span> that likes to <span className="Generated">{verb.verbs[this.state.verbNum].present}</span>.</p>
        <button className="Button" onClick={() => this.handleClick()}>Regenerate</button>
      </div>
    );
  }
}

export default App;
