import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class PrivateRoute extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { auth, component: Component, ...rest } = this.props
    const { token } = auth

    return (
      <Route {...rest} render={props => (
        token ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/signin',
            state: { from: props.location }
          }}/>
        )
      )}/>
    )
  }
}

export default connect(
  state => ({
    auth: state.auth
  })
)(PrivateRoute)
