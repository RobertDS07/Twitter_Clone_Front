import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
    grid-area: main;
`

export default ({ match }) => {
    console.log(match)
    return (
        <Main>
            <h1>Profile</h1>
        </Main>
    )
}
