import React from 'react'
import { Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './components/Home'

const routes = () => {
  return (
    <div>
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <PrivateRoute exact path='/' component={Home} />
    </div>
  )
}

export default routes
