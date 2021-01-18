import React, { useContext } from 'react'

import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import LoggedContext from '../Contexts/LoggedContext'

export default () => {
    const { alert, setAlert } = useContext(LoggedContext)

    return (
        <Snackbar
            open={!!alert}
            autoHideDuration={4000}
            onClose={() => setAlert(false)}
            anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        >
            <Alert severity={alert.severity} onClose={() => setAlert(false)}>
                {alert.message}
            </Alert>
        </Snackbar>
    )
}
