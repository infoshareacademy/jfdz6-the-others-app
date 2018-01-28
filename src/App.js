import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    NavLink,

} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import KomunikacjaMiejskaGdansk from "./components/KomunikacjaMiejskaGdansk";
import RozkladJazdy from "./components/RozkladJazdy";
import RozkladJazdy2 from "./components/RozkladJazdy2";
import InformacjeOKomunikacji from "./components/InformacjeOKomunikacji";
import Logout from './Logout'
import AllStops from './AllStops'
import ShowTrack from './ShowTrack'
import GoogleMap from './Googlemap'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <div  id="container">
                  <div className='animated fadeIn ' id="main-header">in-extremo </div>
                  <div id="body">


                      <ul className="header animated fadeIn" >
                          <li><NavLink  exact to="/" activeClassName="active" >Komunikacja Miejska Gdansk</NavLink></li>
                          {/*<li><NavLink  to="/RozkladJazdy" activeClassName="active">Rozklad Jazdy </NavLink></li>*/}
                          <li><NavLink  to="/InformacjeOKomunikacji" activeClassName="active">Informacje o komunikacji</NavLink></li>
                          <li><NavLink  to="/RozkladJazdyMin" activeClassName="active">Rozkład jazdy</NavLink></li>
                      </ul>


                      <hr/>
                      <div className="content">
                          <Route path="/RozkladJazdyMin" component={RozkladJazdy2}/>
                          <Route path="/RozkladJazdy" component={RozkladJazdy}/>
                          <Route path="/InformacjeOKomunikacji" component={InformacjeOKomunikacji}/>
                      </div>
                  </div>
                  <Route exact path="/" component={KomunikacjaMiejskaGdansk}/>
                  <button  id="myBtn">Top</button>
              </div>
          </Router>

      </div>
    );

  }
}

export default connect(
  state => ({
    auth: state.auth
  })
)(App);
