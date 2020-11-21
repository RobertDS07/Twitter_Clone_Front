import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    grid-area: header;
`

export default () => {
    return (
        <Header>
            <h1 className="oi">Header</h1>
        </Header>
    )
}
