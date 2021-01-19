import React, { useContext, useRef, useState } from 'react'

import {
    AppBar,
    Avatar,
    Grid,
    IconButton,
    makeStyles,
    Menu,
    MenuItem,
} from '@material-ui/core'
import LoggedContext from '../Contexts/LoggedContext'
import { deepOrange } from '@material-ui/core/colors'

const useStyles = makeStyles({
    wrapper: {
        height: '80px',
    },
    header: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    avatar: {
        backgroundColor: deepOrange[500],
        width: '38px',
        height: '38px',
    },
})

export default () => {
    const { wrapper, header, avatar } = useStyles()

    const { logged, setLogged } = useContext(LoggedContext)

    const [openAnchor, setOpenAnchor] = useState(false)
    const anchorEl = useRef()

    const getFirstLetter = identity => {
        const parsedIdentity = JSON.parse(identity)

        const { user } = parsedIdentity

        return user.charAt(0).toUpperCase()
    }

    return (
        <Grid item xs={12} className={wrapper}>
            <AppBar position="static" className={header}>
                {logged && (
                    <>
                        <IconButton
                            ref={anchorEl}
                            onClick={() => setOpenAnchor(true)}
                        >
                            <Avatar className={avatar}>
                                {getFirstLetter(logged)}
                            </Avatar>
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl.current}
                            open={openAnchor}
                            onClose={() => setOpenAnchor(false)}
                            keepMounted
                            transformOrigin={{
                                vertical: -50,
                                horizontal: 'center',
                            }}
                        >
                            <MenuItem
                                onClick={() => {
                                    localStorage.clear()
                                    setLogged(false)
                                }}
                            >
                                Logout
                            </MenuItem>
                        </Menu>
                    </>
                )}
            </AppBar>
        </Grid>
    )
}
