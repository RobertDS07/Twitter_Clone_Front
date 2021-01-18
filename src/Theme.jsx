import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    '*': {
                        boxSizing: 'border-box',
                    },
                },
            },
        },
    },
})

export default theme
