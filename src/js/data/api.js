'use strict'

import fetch from 'isomorphic-fetch'
import FormData from 'form-data'
import { API_URL } from './../web.config'
import { store } from '../store'

export function signIn(username, password) {
  const url = `${API_URL}/signin`

  const options = {
    "method": "POST",
    "headers": {
      "content-type": "application/json"
    },
    "body": JSON.stringify({ username, password })
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
  const url = `${API_URL}/signup`

  const options = {
    "method": "POST",
    "headers": {
      "content-type": "application/json"
    },
    "body": JSON.stringify({ username, password })
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
  const auth = store.getState().auth

  const url = `${API_URL}/recipes?user=current`

  const options = {
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
  const auth = store.getState().auth

  const url = `${API_URL}/recipes?visibility=public`

  const options = {
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
  const auth = store.getState().auth

  const url = `${API_URL}/recipes/${recipeId}`

  const options = {
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
  const auth = store.getState().auth

  const url = `${API_URL}/recipes/${recipeId}`

  const options = {
    "method": "DELETE",
    "headers": {
      "content-type": "application/json",
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
  const auth = store.getState().auth

  const url = `${API_URL}/recipes/${recipeId}`

  const options = {
    "method": "PUT",
    "headers": {
      "content-type": "application/json",
      "Authorization": "JWT " + auth.token
    },
    body: JSON.stringify(recipe)
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
  const auth = store.getState().auth

  const url = `${API_URL}/recipes`

  const options = {
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "Authorization": "JWT " + auth.token
    },
    "body": JSON.stringify(recipe)
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
  const auth = store.getState().auth

  const url = `${API_URL}/recipes/${recipeId}/ingredients`

  const options = {
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "Authorization": "JWT " + auth.token
    },
    "body": JSON.stringify(ingredient)
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
  const auth = store.getState().auth

  const url = `${API_URL}/recipes/${recipeId}/ingredients/${ingredient._id}`

  const options = {
    "method": "PUT",
    "headers": {
      "content-type": "application/json",
      "Authorization": "JWT " + auth.token
    },
    "body": JSON.stringify(ingredient)
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
  const auth = store.getState().auth

  const url = `${API_URL}/recipes/${recipeId}/ingredients/${ingredientId}`

  const options = {
    "method": "DELETE",
    "headers": {
      "content-type": "application/json",
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
  const auth = store.getState().auth

  const url = `${API_URL}/recipes/${recipeId}/steps`

  const options = {
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "Authorization": "JWT " + auth.token
    },
    "body": JSON.stringify(step)
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
  const auth = store.getState().auth

  const url = `${API_URL}/recipes/${recipeId}/steps/${step._id}`

  const options = {
    "method": "PUT",
    "headers": {
      "content-type": "application/json",
      "Authorization": "JWT " + auth.token
    },
    "body": JSON.stringify(step)
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
  const auth = store.getState().auth

  const url = `${API_URL}/recipes/${recipeId}/steps/${stepId}`

  const options = {
    "method": "DELETE",
    "headers": {
      "content-type": "application/json",
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

export function uploadImage(image) {
  const auth = store.getState().auth

  const url = `${API_URL}/images`

  let form = new FormData()
  form.append("image", image)

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