import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Auth.css'

import Login from './Login'
import SignUp from './SignUp'

class Auth extends Component {
  render() {
    return (
      <div>
        {
          this.props.auth.data === null ?
            <div id="scroll-bg">
              <div id="signup-login">
                <div id="noLogin">
                  Witaj!
                  <br/>
                  Nie jesteś zalogowany!
                  <br/>
                  Aby korzystać z aplikacji, zaloguj się lub zarejestruj.
                </div>
                <div>
                  <Login/>
                  <SignUp/>
                </div>
              </div>
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