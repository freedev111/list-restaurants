import React from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import CustomLayout from 'containers/Layout'
import { Restaurant } from 'containers/Pages'

const Routes = () => (
  <BrowserRouter>
    <CustomLayout>
      <Switch>
        <Redirect exact path='/' to='/restaurant' />
        <Route exact path='/restaurant' component={Restaurant} />
      </Switch>
    </CustomLayout>
  </BrowserRouter>
)

export default Routes
