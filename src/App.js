import React, { Component } from 'react';
import './App.css';
import Logout from './Logout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Logout />
        </header>
      </div>
    );

  }
}

export default App;
