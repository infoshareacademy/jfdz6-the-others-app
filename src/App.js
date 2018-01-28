import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Logout from './Logout'
import AllStops from './AllStops'
import ShowTrack from './ShowTrack'



import Mail from 'react-icons/lib/md/mail'
import Face from 'react-icons/lib/md/face'
import Box from 'react-icons/lib/md/account-box'
import Scanner from 'react-icons/lib/md/scanner'
import Facebook from 'react-icons/lib/fa/facebook'
import Twitter from 'react-icons/lib/fa/twitter'
import GooglePlus from 'react-icons/lib/fa/google-plus'

import { Parallax } from 'react-parallax';
import './App.css'
import {Image} from 'react-bootstrap'
import firstPhoto from './photos/tran7.png'
import secondPhoto from './photos/tran2.png'
import thirdPhoto from './photos/tran6.png'
import {Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import $ from 'jquery'
import {Nav,NavItem,Navbar,MenuItem,NavDropdown} from 'react-bootstrap'

import RozkladJazdy2 from './components/RozkladJazdy2'

import onepic from './photos/pic1.jpg'
import twopic from './photos/pic2.jpeg'
import threepic from './photos/pic3.jpeg'
import fourpic from './photos/pic4.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">

        {/*<ShowTrack />*/}


          <div className='container-fluid'>
              <Navbar className="navbarfix" inverse collapseOnSelect>
                  <Navbar.Header >
                      <Navbar.Brand>
                          <a href="#brand">Komunikacja Miejska Gdansk</a>
                      </Navbar.Brand>
                      <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                      <Nav>
                          <NavItem eventKey={1} href="#services">
                              Funkcjonalnosc
                          </NavItem>
                          <NavItem eventKey={2} href="#history">
                              Historia
                          </NavItem>
                          <NavItem eventKey={2} href="#team">
                              Team
                          </NavItem>
                          <NavItem eventKey={2} href="#contact">
                              Kontakt
                          </NavItem>
                          <NavItem eventKey={2} href="#stops">
                              Kontakt
                          </NavItem>

                          <header>
                              Witaj {this.props.auth.data.displayName}!
                              <Logout />
                              {/*<AllStops />*/}

                          </header>
                      </Nav>

                  </Navbar.Collapse>
              </Navbar>

                <RozkladJazdy2 />

              <Parallax
                  blur={{ min: -23, max: 15 }}
                  bgImage={require('./images/bg3.jpg')}
                  bgImageAlt="second"
                  strength={200}
              >
                  <div className="mainHeader">
                      <div className="container">
                          <div className="intro-text">
                              <div className="intro-lead-in">Welcome To Our Studio!</div>
                              <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
                          </div>
                      </div>
                  </div>
                  <div style={{ height: '50vh' }} />
              </Parallax>


              <section id="services">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12 text-center ">
                              <h2 className="section-heading text-uppercase">Funcjonalnosc</h2>
                              <h3 className="section-subheading text-muted"></h3>
                          </div>
                      </div>
                      <div className="row text-center">
                          <div className="col-xs-12 col-sm-3">
            <span className="fa-stack fa-4x">

             <Scanner size={50}/>
            </span>
                              <h4 className="service-heading">Historia</h4>
                              <p className="text-muted">Dowiesz się tutaj o najnowszych planach rozwoju oraz sprawdzisz historię KMG.</p>
                          </div>
                          <div className="col-xs-12 col-sm-3">
            <span className="fa-stack fa-4x">
          <Box size={50} />
            </span>
                              <h4 className="service-heading">Rozklad jazdy</h4>
                              <p className="text-muted">znajdziesz u nas wszystkie aktualne rozkłady jazdy!</p>
                          </div>
                          <div className="col-xs-12 col-sm-3">
            <span className="fa-stack fa-4x">
            <Face size={50}/>
            </span>
                              <h4 className="service-heading">Mapa</h4>
                              <p className="text-muted">Sprawdzisz z nami najszybszą trasę dojazdu!</p>
                          </div>
                          <div className="col-xs-12 col-sm-3">
            <span className="fa-stack fa-4x">
            <Mail size={50}/>
            </span>
                              <h4 className="service-heading">Info</h4>
                              <p className="text-muted">Powiadom nas korkach, awariach i spóźnieniach. </p>
                          </div>
                      </div>
                  </div>
              </section>

              <Parallax
                  blur={{ min: -23, max: 15 }}
                  bgImage={require('./images/bg1.jpg')}
                  bgImageAlt="second"
                  strength={200}
              >

                  <div id="history" className="history">

                      <div className="container  col-md-12 col-lg-3 fiximg">
                          <Image className='image' src={fourpic}  responsive/>
                          <div className="overlay">
                              <div className="text">Gdańskie Autobusy i Tramwaje – przedsiębiorstwo zajmujące się usługami związanymi z rozkładowym transportem pasażerskim i transportem w komunikacji miejskiej. Jest największym przewoźnikiem w sieci ZTM Gdańsk</div>
                          </div>
                      </div>

                      <div className="container  col-md-12 col-lg-3 fiximg">
                          <Image className='image' src={threepic}  responsive/>
                          <div className="overlay">
                              <div className="text">PKP Szybka Kolej Miejska w Trójmieście – przewoźnik kolejowy z siedzibą w Gdyni działający w województwie pomorskim oraz zarządca linii kolejowej nr 250 Gdańsk Śródmieście – Rumia</div>
                          </div>
                      </div>

                      <div className="container  col-md-12 col-lg-3 fiximg">
                          <Image className='image' src={twopic}  responsive/>
                          <div className="overlay">
                              <div className="text">Pomorska Kolej Metropolitalna – spółka akcyjna powołana przez samorząd województwa pomorskiego w celu budowy linii kolejowej nr 248 Gdańsk Wrzeszcz – Gdańsk Osowa oraz łącznicy nr 253 Gdańsk Rębiechowo – Rębiechowo. </div>
                          </div>
                      </div>

                      <div className="container  col-md-12 col-lg-3 fiximg">
                          <Image className='image' src={onepic}  responsive/>
                          <div className="overlay">
                              <div className="text"> jednostka pomocnicza samorządu Gdańska, zajmująca się organizacją i zarządzaniem pasażerskim zbiorowym transportem miejskim. Zarząd Transportu Miejskiego w Gdańsku jest jednostką budżetową Miasta Gdańska.</div>
                          </div>
                      </div>



                  </div>



                  <div style={{ height: '400px' }} />
              </Parallax>


              <section className="bg-light" id="team">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12 text-center">
                              <h2 className="section-heading text-uppercase">Nasz zespol</h2>
                              <h3 className="section-subheading text-muted"></h3>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-sm-4">
                              <div className="team-member">

                                  <Image className='img-fix' src={firstPhoto} rounded responsive/>  <h4>Norbert Brzeski</h4>

                                  <p className="text-muted">Lead Designer</p>
                                  <ul className="list-inline social-buttons">
                                      <li className="list-inline-item">
                                          <a className='twcolor' href="https://twitter.com/" target="_blank">
                                              <Twitter size={30}/>
                                          </a>
                                      </li>
                                      <li className="list-inline-item">
                                          <a className='fbcolor' href="https://www.facebook.com" target="_blank">
                                              <Facebook size={30}/>
                                          </a>
                                      </li>
                                      <li className="list-inline-item">
                                          <a className='gcolor' href="https://plus.google.com/" target="_blank">
                                              <GooglePlus size={30}/>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-sm-4">
                              <div className="team-member">
                                  <Image src={secondPhoto} rounded responsive/>

                                  <h4>Piotr Barcik</h4>

                                  <p className="text-muted">Lead Marketer</p>
                                  <ul className="list-inline social-buttons">
                                      <li className="list-inline-item">
                                          <a className='twcolor' href="https://twitter.com/" target="_blank">
                                              <Twitter size={30}/>
                                          </a>
                                      </li>
                                      <li className="list-inline-item">
                                          <a className='fbcolor' href="https://www.facebook.com" target="_blank">
                                              <Facebook  size={30}/>   </a>
                                      </li>
                                      <li className="list-inline-item">
                                          <a className='gcolor' href="https://plus.google.com/" target="_blank">
                                              <GooglePlus size={30}/>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-sm-4">
                              <div className="team-member">

                                  <Image src={thirdPhoto} rounded responsive/>
                                  <h4>Marcin Fortuna</h4>

                                  <p className="text-muted">Lead Developer</p>
                                  <ul className="list-inline social-buttons">
                                      <li className="list-inline-item">
                                          <a className='twcolor' href="https://twitter.com/" target="_blank">
                                              <Twitter size={30}/>
                                          </a>
                                      </li>
                                      <li className="list-inline-item">
                                          <a className='fbcolor' href="https://www.facebook.com" target="_blank">
                                              <Facebook size={30}/>                                                </a>
                                      </li>
                                      <li className="list-inline-item">
                                          <a className='gcolor' href="https://plus.google.com/" target="_blank" >
                                              <GooglePlus  size={30}/>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-lg-8 mx-auto text-center">
                          </div>
                      </div>
                  </div>
              </section>

              <div id="contact" >
                  <Parallax className="footfix"
                            blur={{ min: -23, max: 15 }}
                            bgImage={require('./images/bg2.jpg')}
                            bgImageAlt="second"
                            strength={200}
                  ><p className='mainfooter'>Copyright The Others © 2017</p>



                      <div style={{ height: '300px' }} />
                  </Parallax>
              </div>



              <button  id="myBtn">Top</button>
          </div>

      </div>
    );

  }
    componentDidMount() {
        $("#myBtn").hide().click(function(){
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        });


        $(document).scroll(function() {
            let y = $(this).scrollTop();
            if (y > 100) {
                $('#myBtn').fadeIn();
            } else {
                $('#myBtn').fadeOut();
            }
        });
    }
}

export default connect(
  state => ({
    auth: state.auth
  })
)(App);
