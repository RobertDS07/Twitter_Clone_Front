import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NotFound from './components/utils/NotFound'

import Header from './components/Header'
import Home from './components/Home'
import Feed from './components/Feed'
import Profile from './components/Profile'

export default () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />

                <Route path="/home" component={Feed} />

                <Route path="/user/:id" component={Profile} />

                <Route path="*" component={NotFound} />
            </Switch>
        </>
    )
}
