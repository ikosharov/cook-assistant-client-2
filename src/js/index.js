import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './components/Home'
import { Provider } from 'react-redux'
import configureStore from './store'

import '../assets/styles/index.css'

const App = () => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <PrivateRoute path='/recipes' component={Home} />
          <Redirect to='/recipes' />
        </Switch>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
