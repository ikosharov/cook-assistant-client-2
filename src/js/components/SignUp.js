import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import { actions as authActions } from '../actions/auth'
import autobind from 'react-autobind'
import Loader from './Loader'

class SignUp extends Component {
  constructor(props) {
    super(props)

    autobind(this)
  }

  handleSignUp() {
    const { SIGN_UP, history } = this.props
    const { username, password } = this.props.auth
    SIGN_UP({ payload: { username, password }, history })
  }

  render() {
    const { USERNAME_CHANGE, PASSWORD_CHANGE, fetching } = this.props
    const { username, password, error } = this.props.auth

    return (
      <Loader fetching={fetching}>
        <h1>Sign Up</h1>
        <input type='text' value={username || ''} onChange={(e) => USERNAME_CHANGE({ payload: e.target.value })} />
        <input type='text' value={password || ''} onChange={(e) => PASSWORD_CHANGE({ payload: e.target.value })} />
        <button onClick={this.handleSignUp}>Sign Up</button>
        { error && <h3>{error}</h3> }
        <Link to="/signin">Sign In</Link>
      </Loader>
    )
  }
}

export default withRouter(connect(
  state => ({
    auth: state.auth,
    fetching: state.fetching
  }),
  dispatch => ({
    ...bindActionCreators(authActions, dispatch)
  })
)(SignUp))
