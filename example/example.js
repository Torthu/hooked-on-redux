import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {createReducer, useRedactState} from '../index'

const reducer = createReducer()
const store = createStore(reducer, {})

const App = props => {
  const [value, updateValue] = useRedactState('app.counterValue', 0)
  return (
    <div>
      <div>{value}</div>
      <div><button onClick={() => updateValue(value + 1)}>+ 1</button></div>
      <div><button onClick={() => updateValue(value -1)}>- 1</button></div>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)