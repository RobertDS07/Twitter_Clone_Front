import React from 'react'

import { Grid, Paper, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    wrapperTextArea: {
        height: '200px',
        width: '100%',
        margin: '20px 0',
    },
    paperTextArea: {
        height: '200px',
    },
})

export default () => {
    const { paperTextArea, wrapperTextArea } = useStyles()

    return (
        <Grid item xs={12}>
            <Grid
                container
                justify="flex-start"
                direction="column"
                alignItems="center"
            >
                <Grid item xs={10} sm={7} className={wrapperTextArea}>
                    <Paper className={paperTextArea} elevation={3}>
                        {/* form  */}
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}
