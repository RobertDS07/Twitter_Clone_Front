import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

import LoggedContext from '../components/Contexts/LoggedContext'

import Header from '../components/Header'
import Home from '../components/Home/index'
import Feed from '../components/Feed'
import Profile from '../components/Profile'

import NotFound from '../components/utils/NotFound'

export default () => {
    const [logged, setLogged] = useState(false)

    return (
        <>
            <LoggedContext.Provider value={{ logged, setLogged }}>
                <Header />

                <Switch>
                    <PublicRoutes exact path="/" Component={Home} />

                    <PrivateRoute path="/feed" Component={Feed} />
                    <PrivateRoute path="/user/:id" Component={Profile} />

                    <Route path="*" component={NotFound} />
                </Switch>
            </LoggedContext.Provider>
        </>
    )
}
