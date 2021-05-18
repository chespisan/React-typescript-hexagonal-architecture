import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './views/login/Login'

const App = () => {
  return (
    <Router basename="/#">
      <Switch>
        <Route exact path="/" component={Login}></Route>
      </Switch>
    </Router>
  )
}

export default App
