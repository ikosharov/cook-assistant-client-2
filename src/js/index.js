import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from './routes'
import configureStore from './store'

import '../assets/styles/index.css'

const App = () => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
