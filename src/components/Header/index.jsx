import React, { useContext, useState } from 'react'

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

    const { logged } = useContext(LoggedContext)

    const [anchor, setAnchor] = useState()

    return (
        <Grid item xs={12} className={wrapper}>
            <AppBar position="static" className={header}>
                {logged && (
                    <>
                        <IconButton onClick={e => setAnchor(e.currentTarget)}>
                            <Avatar className={avatar}>R</Avatar>
                        </IconButton>
                        <Menu
                            anchorEl={anchor}
                            keepMounted
                            open={!!anchor}
                            onClose={() => setAnchor()}
                            anchorOrigin={{
                                horizontal: 'right',
                                vertical: 'bottom',
                            }}
                            transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem>Logout</MenuItem>
                        </Menu>
                    </>
                )}
            </AppBar>
        </Grid>
    )
}
