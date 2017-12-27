import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Auth.css'
import preview from './Assets/Photos/preview.png'
import Image from 'react-bootstrap/lib/Image';

import Login from './Login'
import SignUp from './SignUp'

class Auth extends Component {
  render() {
    return (
      <div>
        {
          this.props.auth.data === null ?

            <div id="scroll-bg">
              <div className="preview-h1">
                <h1 className="Title">Twój przewodnik po komunikacji miejskiej w Gdańsku</h1>
                <div className="preview-container">
                  <div className="preview animated rotateInDownLeft">
                    <div className="preview-img">
                      <Image src={preview} alt="img" responsive/>
                    </div>
                  </div>
                  <div className="info">
                    <div>Witaj! Z nami zaplanujesz swoją podróż oraz dowiesz się czego zechcesz o
                      transporcie publicznym w Gdańsku! Nasza aplikacja umożliwia wyznaczenie
                      trasy między dowolnymi dwoma punktami, zawiera aktualne rozkłady jazdy i o
                      wiele więcej!
                    </div>
                  </div>
                </div>
              </div>

              <div id="signup-login">
                <div id="noLogin">
                  Nie jesteś zalogowany!
                  <br/>
                  Aby korzystać z aplikacji, zaloguj się lub zarejestruj.
                </div>
                <div id="signup-login-choice">
                  <Login/>
                  <SignUp/>
                </div>
              </div>
              <footer>
                <span>Copyright: The Others 2018</span>
              </footer>
            </div>
            :
            this.props.children
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps
)(Auth)