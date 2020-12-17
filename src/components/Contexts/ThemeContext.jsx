import React, { ThemeProvider, CssBaseline } from '@material-ui/core'

export default ({ children, ...props }) => (
    <ThemeProvider {...props}>
        <CssBaseline />

        {children}
    </ThemeProvider>
)
