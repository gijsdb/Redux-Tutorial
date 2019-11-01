import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './App'

const store = createStore(rootReducer)

// The App is wrapped in a provider so the whole app can access the store
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)