import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Logout from './Logout'
import AllStops from './AllStops'
import ShowTrack from './ShowTrack'
import GoogleMap from './Googlemap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          Witaj {this.props.auth.data.displayName}!
          <Logout />
          {/*<AllStops />*/}

        </header>
        <div style={{width: '100%', height: '400px'}}>
          <GoogleMap />
        </div>
        {/*<ShowTrack />*/}

      </div>
    );

  }
}

export default connect(
  state => ({
    auth: state.auth
  })
)(App);
