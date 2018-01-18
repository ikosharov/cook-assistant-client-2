import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div>Welcome to Cook Assistant v2</div>)
  }
}

export default connect(
  state => ({
    auth: state.auth
  }),
  dispatch => ({

  })
)(Home)
