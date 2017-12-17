import React, {Component} from 'react'
import './App.css'

class Login extends Component {

  state = {
    showLoginForm: false,
    showSignUpForm: false
  }

  toggleForm = event => {
    const formId = event.target.dataset.formId
    this.setState({
      [formId]: !this.state[formId]
    })
  }

  render() {
    return (

      <div className="login">
        <span className="login" onClick={this.toggleForm} data-form-id="showSignUpForm">LOGOWANIE</span>
        <form action="#" className={'login ' + (this.state.showSignUpForm ? 'formvisible' : 'formhidden')}>
          Login: <input type="text" name="login"/> <br/>
          Hasło: <input type="text" name="password"/> <br/>
          <input type="submit" value="Wyślij"/> <br/>
        </form>
      </div>
    );

  }
}

export default Login