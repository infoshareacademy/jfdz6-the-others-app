import React, {Component} from 'react'
import './App.css'
import { connect } from 'react-redux'
import { logIn } from './state/auth'


class Login extends Component {

  state = {
    showLoginForm: false,
    login: '',
    password: ''
  }

  toggleForm = event => {
    const formId = event.target.dataset.formId
    this.setState({
      [formId]: !this.state[formId]
    })
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.logIn(
      this.state.login,
      this.state.password
    )
  }

  render() {
    return (

      <div className="login">
        <span className="login" onClick={this.toggleForm} data-form-id="showLoginForm">LOGOWANIE</span>
        <form action="#" className={'login ' + (this.state.showLoginForm ? 'formvisible' : 'formhidden')} onSubmit={this.handleSubmit}>
          Login: <input type="text" name="login" onChange={this.handleChange}/> <br/>
          Hasło: <input type="password" name="password" onChange={this.handleChange}/> <br/>
          <input type="submit" value="Wyślij"/> <br/>
        </form>
      </div>
    );

  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  logIn: (email, password) => dispatch(logIn(email, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)