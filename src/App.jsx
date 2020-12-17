import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import theme from './Theme'
import ThemeContext from './components/Contexts/ThemeContext'

import Routes from './Routes/Routes'

export default () => {
    return (
        <ThemeContext theme={theme}>
            <Router>
                <Routes />
            </Router>
        </ThemeContext>
    )
}
