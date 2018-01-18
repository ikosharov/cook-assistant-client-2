import React, { Component } from 'react'
import { connect } from 'react-redux'

class SignIn extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div>SignIn</div>)
  }
}

export default connect(
  state => ({
    auth: state.auth
  })
)(SignIn)
