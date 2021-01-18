import React, { useContext } from 'react'

import { Redirect, Route } from 'react-router-dom'

import LoggedContext from '../../components/Contexts/LoggedContext'

export default ({ Component, ...rest }) => {
    const { logged } = useContext(LoggedContext)

    return (
        <Route
            {...rest}
            render={props =>
                !logged ? <Component {...props} /> : <Redirect to="/feed" />
            }
        />
    )
}
