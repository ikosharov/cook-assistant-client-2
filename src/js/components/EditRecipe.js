import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { actions as recipeActions } from '../actions/recipe'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import autobind from 'react-autobind'
import { getRecipe } from '../reducers/recipe'

class EditRecipe extends Component {
  constructor (props) {
    super(props)

    autobind(this)
  }

  componentDidMount () {
    const { match } = this.props
    this.props.FETCH_RECIPE({ payload: match.params.recipeId })
  }

  render () {
    const { SAVE_RECIPE, TITLE_CHANGE, match, recipe = {} } = this.props
    const { recipeId } = match.params

    return (
      <div>
        <h3>
          <input type="text"
                 name="title"
                 value={recipe.title || ''}
                 onChange={(e) => TITLE_CHANGE({ payload: e.target.value })} />
        </h3>
        <button onClick={() => SAVE_RECIPE({ payload: { recipeId, recipe } })}>Save</button>
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
)(EditRecipe))
