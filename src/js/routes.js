import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './components/Home'

const routes = () => {
  return (
    <Switch>
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <PrivateRoute path='/home' component={Home} />
      <Redirect to='/home' />
    </Switch>
  )
}

export default routes
