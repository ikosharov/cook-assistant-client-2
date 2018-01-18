import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as authActions } from '../actions/auth'
import autobind from 'react-autobind'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    autobind(this)
  }

  handleUsernameChange(e) {
    this.setState({ "username": e.target.value })
  }

  handlePasswordChange(e) {
    this.setState({ "password": e.target.value })
  }

  handleSignIn() {
    const { SIGN_UP, history } = this.props
    const { username, password } = this.state
    SIGN_UP({ username, password }, history)
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
        <input type='text' value={this.state.password} onChange={this.handlePasswordChange} />
        <button onClick={this.handleSignIn}>Sign Up</button>
      </div>
    )
  }
}

export default connect(
  state => ({
    auth: state.auth
  }),
  dispatch => ({
    ...bindActionCreators(authActions, dispatch)
  })
)(SignUp)
