import watchAuth from './auth'
import watchRecipes from './recipes'
import watchRecipe from './recipe'

export default function * rootSaga () {
  yield [
    watchAuth(),
    watchRecipes(),
    watchRecipe()
  ]
}