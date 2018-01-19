import React from 'react'

const RecipeList = ({ recipes }) => {
  const markup = recipes.map((recipe, idx) => {
    return (
      <div key={idx}>{recipe.title}</div>
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