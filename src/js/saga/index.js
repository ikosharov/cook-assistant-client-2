import watchAuth from './auth'
import watchRecipes from './recipes'

export default function * rootSaga () {
  yield [
    watchAuth(),
    watchRecipes()
  ]
}