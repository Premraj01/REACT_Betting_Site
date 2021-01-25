/** @format */

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import GameScreen from './screens/GameScreen'

const App = () => {
  return (
    <>
      <Router>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/game' component={GameScreen} />
      </Router>
    </>
  )
}

export default App
