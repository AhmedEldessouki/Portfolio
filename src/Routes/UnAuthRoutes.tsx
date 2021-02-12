import React from 'react'
import {Route, Switch} from 'react-router-dom'

import SignIn from './SignIn'
import PageNotFound from './PageNotFound'
import Home from './Home'

function UnAuthRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route from="*" to="/" component={PageNotFound} />
    </Switch>
  )
}

export default UnAuthRoutes
