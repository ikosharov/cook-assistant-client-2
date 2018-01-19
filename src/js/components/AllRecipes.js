import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as recipesActions } from '../actions/recipes'
import { bindActionCreators } from 'redux'
import autobind from 'react-autobind'
import RecipeList from './RecipeList'
import { getCurrentUserRecipes, getOtherUsersRecipes } from '../reducers/recipes'

class AllRecipes extends Component {
  constructor(props) {
    super(props)

    autobind(this)
  }

  componentDidMount() {
    this.props.FETCH_RECIPES_REQUEST()
  }

  render() {
    const { currentUserRecipes, otherUsersRecipes } = this.props

    return (
      <div>
        <h2>Your recipes</h2>
        <RecipeList recipes={currentUserRecipes} />

        <h2>Other recipes</h2>
        <RecipeList recipes={otherUsersRecipes} />
      </div>
    )
  }
}

export default connect(
  state => ({
    currentUserRecipes: getCurrentUserRecipes(state),
    otherUsersRecipes: getOtherUsersRecipes(state)
  }),
  dispatch => ({
    ...bindActionCreators(recipesActions, dispatch)
  })
)(AllRecipes)
