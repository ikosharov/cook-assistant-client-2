'use strict'

import fetch from 'isomorphic-fetch'
import FormData from 'form-data'
import { API_URL } from './../web.config'
import { store } from '../store'

export function signIn(username, password) {
  let credentials = {
    username: username,
    password: password
  }

  let url = `${API_URL}/signin`

  let options = {
    "method": "POST",
    "headers": {
      "content-type": "application/json"
    },
    "body": JSON.stringify(credentials)
  }

  return new Promise((resolve, reject) => {
    fetch(url, options).then((response) => {
      if (response.status !== 200) {
        response.json().then(json => {
          reject(json)
        })
      } else {
        response.json().then(json => {
          resolve(json)
        })
      }
    }).catch(() => {
      reject('Network failure')
    })
  })
}

export function signUp(username, password) {
  let credentials = {
    username: username,
    password: password
  }

  let url = `${API_URL}/signup`

  let options = {
    "method": "POST",
    "headers": {
      "content-type": "application/json"
    },
    "body": JSON.stringify(credentials)
  }

  return new Promise((resolve, reject) => {
    fetch(url, options).then((response) => {
      if (response.status !== 200) {
        response.json().then(json => {
          reject(json)
        })
      } else {
        response.json().then((json) => {
          resolve(json)
        })
      }
    }).catch(() => {
      reject('Network failure')
    })
  })
}

export function loadCurrentUserRecipes() {
  let auth = store.getState().auth

  let url = `${API_URL}/recipes?user=current`

  let options = {
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "Authorization": "JWT " + auth.token
    }
  }

  return new Promise((resolve, reject) => {
    fetch(url, options).then((response) => {
      if (response.status !== 200) {
        reject()
      } else {
        response.json().then((json) => {
          resolve(json)
        })
      }
    }).catch(() => {
      // network failure
      reject()
    })
  })
}

export function loadAnyUserRecipes() {
  let auth = store.getState().auth

  let url = `${API_URL}/recipes?visibility=public`

  let options = {
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "Authorization": "JWT " + auth.token
    }
  }

  return new Promise((resolve, reject) => {
    fetch(url, options).then((response) => {
      if (response.status !== 200) {
        reject()
      } else {
        response.json().then((json) => {
          resolve(json)
        })
      }
    }).catch(() => {
      // network failure
      reject()
    })
  })
}

export function loadRecipe(recipeId) {
  let auth = store.getState().auth

  let url = `${API_URL}/recipes/${recipeId}`

  let options = {
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "Authorization": "JWT " + auth.token
    }
  }

  return new Promise((resolve, reject) => {
    fetch(url, options).then((response) => {
      if (response.status !== 200) {
        reject()
      } else {
        response.json().then((json) => {
          resolve(json)
        })
      }
    }).catch(() => {
      // network failure
      reject()
    })
  })
}

export function deleteRecipe(recipeId) {
  let auth = store.getState().auth

  let url = `${API_URL}/recipes/${recipeId}`

  let options = {
    "method": "DELETE",
    "headers": {
      "Authorization": "JWT " + auth.token
    }
  }

  return new Promise((resolve, reject) => {
    fetch(url, options).then((response) => {
      if (response.status !== 204) {
        reject()
      } else {
        resolve()
      }
    }).catch(() => {
      // network failure
      reject()
    })
  })
}

export function editRecipe(recipeId, recipe) {
  let auth = store.getState().auth

  let url = `${API_URL}/recipes/${recipeId}`

  // strip ingredients and steps to exceeding max field size (2mb)
  delete recipe.ingredients
  delete recipe.steps

  // make sure you're not sending image as base64 string
  if (typeof recipe.image === 'string') {
    delete recipe.image
  }

  let form = new FormData()
  form.append("data", JSON.stringify(recipe))
  if (recipe.image) {
    form.append("image", recipe.image)
  }

  let options = {
    "method": "PUT",
    "headers": {
      "Authorization": "JWT " + auth.token
    },
    "body": form
  }

  return new Promise((resolve, reject) => {
    fetch(url, options).then((response) => {
      if (response.status !== 204) {
        reject()
      } else {
        resolve()
      }
    }).catch(() => {
      // network failure
      reject()
    })
  })
}

export function addRecipe(recipe) {
  let auth = store.getState().auth

  let url = `${API_URL}/recipes`

  let form = new FormData()
  form.append("data", JSON.stringify(recipe))
  if (recipe.image) {
    form.append("image", recipe.image)
  }

  let options = {
    "method": "POST",
    "headers": {
      "Authorization": "JWT " + auth.token
    },
    "body": form
  }

  return new Promise((resolve, reject) => {
    fetch(url, options).then((response) => {
      if (response.status !== 200) {
        reject()
      } else {
        response.json().then((json) => {
          resolve(json)
        })
      }
    }).catch(() => {
      // network failure
      reject()
    })
  })
}

export function addIngredient(recipeId, ingredient) {
  let auth = store.getState().auth

  let url = `${API_URL}/recipes/${recipeId}/ingredients`

  let form = new FormData()
  form.append("data", JSON.stringify(ingredient))
  if (ingredient.image) {
    form.append("image", ingredient.image)
  }

  let options = {
    "method": "POST",
    "headers": {
      "Authorization": "JWT " + auth.token
    },
    "body": form
  }

  return new Promise((resolve, reject) => {
    fetch(url, options).then((response) => {
      // this will not reject on error. only on network failure
      if (response.status !== 200) {
        reject()
      } else {
        response.json().then((json) => {
          resolve(json)
        })
      }
    }).catch(() => {
      // network failure
      reject()
    })
  })
}

export function editIngredient(recipeId, ingredient) {
  let auth = store.getState().auth

  let url = `${API_URL}/recipes/${recipeId}/ingredients/${ingredient._id}`

  if (typeof ingredient.image === 'string') {
    delete ingredient.image
  }

  let form = new FormData()
  form.append("data", JSON.stringify(ingredient))
  if (ingredient.image) {
    form.append("image", ingredient.image)
  }

  let options = {
    "method": "PUT",
    "headers": {
      "Authorization": "JWT " + auth.token
    },
    "body": form
  }

  return new Promise((resolve, reject) => {
    fetch(url, options).then((response) => {
      if (response.status !== 200) {
        reject()
      } else {
        response.json().then((json) => {
          resolve(json)
        })
      }
    }).catch(() => {
      // network failure
      reject()
    })
  })
}

export function deleteIngredient(recipeId, ingredientId) {
  let auth = store.getState().auth

  let url = `${API_URL}/recipes/${recipeId}/ingredients/${ingredientId}`

  let options = {
    "method": "DELETE",
    "headers": {
      "Authorization": "JWT " + auth.token
    }
  }

  return new Promise((resolve, reject) => {
    fetch(url, options).then((response) => {
      // this will not reject on error. only on network failure
      if (response.status !== 204) {
        reject()
      } else {
        resolve()
      }
    }).catch(() => {
      // network failure
      reject()
    })
  })
}

export function addStep(recipeId, step) {
  let auth = store.getState().auth

  let url = `${API_URL}/recipes/${recipeId}/steps`

  let form = new FormData()
  form.append("data", JSON.stringify(step))
  if (step.image) {
    form.append("image", step.image)
  }

  let options = {
    "method": "POST",
    "headers": {
      "Authorization": "JWT " + auth.token
    },
    "body": form
  }

  return new Promise((resolve, reject) => {
    fetch(url, options).then((response) => {
      if (response.status !== 200) {
        reject()
      } else {
        response.json().then((json) => {
          resolve(json)
        })
      }
    }).catch(() => {
      // network failure
      reject()
    })
  })
}

export function editStep(recipeId, step) {
  let auth = store.getState().auth

  let url = `${API_URL}/recipes/${recipeId}/steps/${step._id}`

  if (typeof step.image === 'string') {
    delete step.image
  }

  let form = new FormData()
  form.append("data", JSON.stringify(step))
  if (step.image) {
    form.append("image", step.image)
  }

  let options = {
    "method": "PUT",
    "headers": {
      "Authorization": "JWT " + auth.token
    },
    "body": form
  }

  return new Promise((resolve, reject) => {
    fetch(url, options).then((response) => {
      if (response.status !== 200) {
        reject()
      } else {
        response.json().then((json) => {
          resolve(json)
        })
      }
    }).catch(() => {
      // network failure
      reject()
    })
  })
}

export function deleteStep(recipeId, stepId) {
  let auth = store.getState().auth

  let url = `${API_URL}/recipes/${recipeId}/steps/${stepId}`

  let options = {
    "method": "DELETE",
    "headers": {
      "Authorization": "JWT " + auth.token
    }
  }

  return new Promise((resolve, reject) => {
    fetch(url, options).then((response) => {
      if (response.status !== 204) {
        reject()
      } else {
        resolve()
      }
    }).catch(() => {
      // network failure
      reject()
    })
  })
}