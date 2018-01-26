import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Logout from './Logout'
import AllStops from './AllStops'
import ShowTrack from './ShowTrack'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          Witaj {this.props.auth.data.displayName}!
          <Logout />
          {/*<AllStops />*/}

        </header>
        <ShowTrack />
      </div>
    );

  }
}

export default connect(
  state => ({
    auth: state.auth
  })
)(App);
