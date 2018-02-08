import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { actions as recipeActions } from '../actions/recipe'
import { actions as imagesActions } from '../actions/images'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import autobind from 'react-autobind'
import { getRecipe } from '../reducers/recipe'
import ImageFromDb from './ImageFromDb'

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
    const { SAVE_RECIPE, RECIPE_CHANGE, UPLOAD_IMAGE, match, recipe = {} } = this.props
    const { recipeId } = match.params

    return (
      <div>
        <h3>
          <input type="text"
                 name="title"
                 value={recipe.title || ''}
                 onChange={(e) => RECIPE_CHANGE({
                   payload: { prop: 'title', value: e.target.value }
                 })} />
        </h3>
        <ImageFromDb id={recipe.imageId} />
        <input type="file"
               name="image"
               onChange={(e) => UPLOAD_IMAGE({
                 payload: { image: e.currentTarget.files[0], recipeId }
               })} />

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
    ...bindActionCreators(recipeActions, dispatch),
    ...bindActionCreators(imagesActions, dispatch)
  })
)(EditRecipe))
