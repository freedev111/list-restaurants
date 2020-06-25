import React from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import { Restaurant } from 'containers/Pages'
import CustomLayout from 'containers/Layout'

const Routes = () => (
  <BrowserRouter>
    <CustomLayout>
      <Switch>
        <Redirect path='/' to='/restaurant' />
        <Route exact path='/restaurant' component={Restaurant} />
      </Switch>
    </CustomLayout>
  </BrowserRouter>
)

export default Routes
