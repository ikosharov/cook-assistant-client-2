import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as authActions } from '../actions/auth'
import { bindActionCreators } from 'redux'
import autobind from 'react-autobind'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import Avatar from './Avatar'
import AllRecipes from './AllRecipes'
import CookRecipe from './CookRecipe'
import EditRecipe from './EditRecipe'

class Recipes extends Component {
  constructor(props) {
    super(props)

    autobind(this)
  }

  handleSignOut() {
    const { history, SIGN_OUT } = this.props
    SIGN_OUT(null, history)
  }

  render() {
    const { auth, match } = this.props
    const { username } = auth

    return (
      <div>
        <div>Welcome to Cook Assistant v2</div>
        <Switch>
          <Route path={match.url} exact component={AllRecipes} />
          <Route path={`${match.url}/:recipeId/cook`} component={CookRecipe} />
          <Route path={`${match.url}/:recipeId/edit`} component={EditRecipe} />
          <Redirect to={match.url} />
        </Switch>
        <Avatar username={username} signOut={this.handleSignOut} />
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
)(Recipes)
