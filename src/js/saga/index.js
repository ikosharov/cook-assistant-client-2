import watchAuth from './auth'
import watchRecipes from './recipes'
import watchRecipe from './recipe'
import watchImages from './images'

export default function * rootSaga () {
  yield [
    watchAuth(),
    watchRecipes(),
    watchRecipe(),
    watchImages()
  ]
}