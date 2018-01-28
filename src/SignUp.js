import React, {Component} from 'react'
import './App.css'
import {connect} from 'react-redux'
import {signUp} from './state/auth'


class SignUp extends Component {

  state = {
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
      this.state.password,
      this.state.username
    )
  }

  render() {
    return (
      <div className="signup">
        <form action="#" className={'signup ' + (this.props.showLoginForm ? 'formhidden' : 'formvisible')}
              onSubmit={this.handleSubmit}>
          <span className="inputName">Imię: </span><input type="text" name="username" onChange={this.handleChange}/> <br/>
          <span className="inputName">E-mail: </span><input type="text" name="login" onChange={this.handleChange}/> <br/>
          <span className="inputName">Hasło: </span><input type="password" name="password" onChange={this.handleChange}/> <br/>
          <input type="submit" value="Zarejestruj się"/> <br/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  signUp: (email, password, username) => dispatch(signUp(email, password, username))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)