import React, {Component} from 'react'
import './App.css'
import { connect } from 'react-redux'
import { signUp } from './state/auth'


class SignUp extends Component {

  state = {
    showSignUpForm: false,
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
    this.props.signUp(
      this.state.login,
      this.state.password
    )
  }

  render() {
    return (
      <div className="signup">
        <span className="signup" onClick={this.toggleForm} data-form-id="showSignUpForm">REJESTRACJA</span>
        <form action="#" className={'signup ' + (this.state.showSignUpForm ? 'formvisible' : 'formhidden')} onSubmit={this.handleSubmit}>
          E-mail: <input type="text" name="login" onChange={this.handleChange}/> <br/>
          Hasło: <input type="password" name="password" onChange={this.handleChange}/> <br/>
          <input type="submit" value="Wyślij"/> <br/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  signUp: (email, password) => dispatch(signUp(email, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)