import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as authActions } from '../actions/auth'
import { bindActionCreators } from 'redux'
import autobind from 'react-autobind'

class Home extends Component {
  constructor(props) {
    super(props)

    autobind(this)
  }

  handleSignOut() {
    const { SIGN_OUT, history } = this.props
    SIGN_OUT(null, history)
  }

  render() {
    return (
      <div>
        <div>Welcome to Cook Assistant v2</div>
        <button onClick={this.handleSignOut}>Sign out</button>
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
)(Home)
