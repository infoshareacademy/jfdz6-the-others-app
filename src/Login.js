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
      <div id="signup-login">
        Nie jesteś zalogowany!
        <header>
          <div className="signup" style={{float:'right'}}>
            <span className="signup" onClick={this.toggleForm} data-form-id="showLoginForm">REJESTRACJA</span>
            <form action="#" className={'signup ' + (this.state.showLoginForm ? 'formvisible' : 'formhidden')}>
              Imię: <input type="text" name="fname" /> <br />
              Nazwisko: <input type="text" name="lname" /> <br />
              E-mail: <input type="text" name="email" /> <br />
              Login: <input type="text" name="login" /> <br />
              Hasło: <input type="text" name="password" /> <br />
              <input type="submit" value="Wyślij" /> <br />
            </form>
          </div>
          <div className="login" style={{float:'right'}}>
            <span className="login" onClick={this.toggleForm} data-form-id="showSignUpForm">LOGOWANIE</span>
            <form action="#" className={'login ' + (this.state.showSignUpForm ? 'formvisible' : 'formhidden')}>
              Login: <input type="text" name="login" /> <br />
              Hasło: <input type="text" name="password" /> <br />
              <input type="submit" value="Wyślij" /> <br />
            </form>
          </div>
        </header>

      </div>
    );

  }
}

export default Login