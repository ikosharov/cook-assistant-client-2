import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { actions as recipeActions } from '../actions/recipe'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import autobind from 'react-autobind'
import { getRecipe } from '../reducers/recipe'
import Base64Image from './Base64Image'

class CookRecipe extends Component {
  constructor (props) {
    super(props)

    autobind(this)
  }

  componentDidMount () {
    const { match } = this.props
    this.props.FETCH_RECIPE({ payload: match.params.recipeId })
  }

  render () {
    const { recipe = {} } = this.props
    return (
      <div>
        <h3>Cook recipe - {recipe.title}</h3>
        <Base64Image data={recipe.image} />
      </div>
    )
  }
}

export default withRouter(connect(
  state => ({
    recipe: getRecipe(state)
  }),
  dispatch => ({
    ...bindActionCreators(recipeActions, dispatch)
  })
)(CookRecipe))
