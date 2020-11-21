import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './Routes'

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
`
const App = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 70px 1fr;
    grid-template-areas:
        'header header header'
        'first main second';
`

export default () => {
    return (
        <App>
            <GlobalStyles />

            <Router>
                <Routes />
            </Router>
        </App>
    )
}
