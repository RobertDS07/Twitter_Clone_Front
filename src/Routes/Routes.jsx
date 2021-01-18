import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Grid } from '@material-ui/core'

import PrivateRoute from './components/PrivateRoute'
import PublicRoutes from './components/PublicRoute'

import LoggedContext from '../components/Contexts/LoggedContext'

import Header from '../components/Header'
import Home from '../components/Home/index'
import Feed from '../components/Feed'
import Profile from '../components/Profile'
import Register from '../components/Register'

import NotFound from '../components/utils/NotFound'
import Alert from '../components/utils/Alert'

export default () => {
    const [logged, setLogged] = useState(localStorage.getItem('token'))
    const [alert, setAlert] = useState(false)

    return (
        <LoggedContext.Provider value={{ logged, setLogged, alert, setAlert }}>
            <Grid container alignContent="flex-start">
                <Header />

                <Switch>
                    <PublicRoutes exact path="/" Component={Home} />
                    <PublicRoutes path="/register" Component={Register} />

                    <PrivateRoute path="/feed" Component={Feed} />
                    <PrivateRoute path="/post/:id" Component={Feed} />
                    <PrivateRoute path="/user/:id" Component={Profile} />

                    <Route component={NotFound} />
                </Switch>
            </Grid>
            <Alert />
        </LoggedContext.Provider>
    )
}
