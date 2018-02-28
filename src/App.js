import React, { Component } from 'react';
import './App.css';

let animals = require("./animal-list.json");
let verb = require("./verb-list.json");

let randomFromList = (list) => {
  return Math.floor(Math.random() * list.length);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="App">
        <p>A(n) {animals[randomFromList(animals)]} that likes to {verb.verbs[randomFromList(verb.verbs)].present}.</p>
      </div>
    );
  }
}

export default App;
