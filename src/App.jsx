import ReactDom from 'react-dom'
import HomeScreen from './screens/HomeScreen'
import { useState } from 'react'
import {Provider} from 'react-redux'
import store from './store'

const App = () => {

  
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  )
}

const root = document.getElementById('root')
ReactDom.render(<App />, root)
