import React, { Component } from 'react';
import './App.css';
import AllStops from "./AllStops";
import LineList from "./LineList"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <LineList/>
      <AllStops />
      </div>
    );
  }
}

export default App;
