import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { actions as recipeActions } from '../actions/recipe'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import autobind from 'react-autobind'
import { getRecipe } from '../reducers/recipe'

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
    return (<h3>Cook recipe - {recipe.title}</h3>)
  }
}

export default withRouter(connect(
  state => ({
    recipe: getRecipe(state),
    fetching: state.fetching
  }),
  dispatch => ({
    ...bindActionCreators(recipeActions, dispatch)
  })
)(CookRecipe))
