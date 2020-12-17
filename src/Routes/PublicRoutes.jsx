import React, { useContext } from 'react'

import { Redirect, Route } from 'react-router-dom'

import LoggedContext from '../components/utils/LoggedContext'

export default ({ Component, ...rest }) => {
    const { logged } = useContext(LoggedContext)

    return (
        <Route
            {...rest}
            component={props =>
                !logged ? <Component {...props} /> : <Redirect to="/feed" />
            }
        />
    )
}
