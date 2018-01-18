import React, { Component } from 'react'
import { connect } from 'react-redux'

class SignUp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div>SignUp</div>)
  }
}

export default connect(
  state => ({
    auth: state.auth
  })
)(SignUp)
