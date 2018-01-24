import React from 'react'
import RecipeSummary from './RecipeSummary'

const RecipeList = ({ recipes }) => {
  const markup = recipes.map((recipe, idx) => {
    return (
      <RecipeSummary key={idx} {...recipe} />
    )
  })
  return (
    <div>
      <h3>Recipe List</h3>
      {markup}
    </div>
  )
}

export default RecipeList