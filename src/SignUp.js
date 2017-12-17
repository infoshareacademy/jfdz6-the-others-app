import React, {Component} from 'react'
import './App.css'

class SignUp extends Component {

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
      <div className="signup">
        <span className="signup" onClick={this.toggleForm} data-form-id="showLoginForm">REJESTRACJA</span>
        <form action="#" className={'signup ' + (this.state.showLoginForm ? 'formvisible' : 'formhidden')}>
          Imię: <input type="text" name="fname"/> <br/>
          Nazwisko: <input type="text" name="lname"/> <br/>
          E-mail: <input type="text" name="email"/> <br/>
          Login: <input type="text" name="login"/> <br/>
          Hasło: <input type="text" name="password"/> <br/>
          <input type="submit" value="Wyślij"/> <br/>
        </form>
      </div>
    )
  }
}

export default SignUp