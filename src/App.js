import React, { Component } from 'react';
import './App.css';
import { GoogleMap } from './Googlemap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div style={{width: '100%', height: '400px'}}>
                 <GoogleMap/>
          </div>
        </header>
      </div>
    );

  }
}

export default App;
