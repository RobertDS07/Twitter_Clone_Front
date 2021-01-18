import React, { useContext } from 'react'

import {
    Grid,
    Paper,
    makeStyles,
    TextField,
    Container,
    Button,
} from '@material-ui/core'
import { Field, Form } from 'react-final-form'
import LoggedContext from '../Contexts/LoggedContext'

const useStyles = makeStyles({
    wrapper: {
        height: '500px',
    },
    paper: {
        minHeight: '200px',
    },
    form: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    submitButton: {
        margin: '18px 0',
    },
})

export default () => {
    const { paper, wrapper, form, submitButton } = useStyles()

    const { setAlert } = useContext(LoggedContext)

    const handleRequest = async values => {
        try {
            if (values.password !== values.passwordConfirm)
                throw new Error('Password must be the same')

            await new Promise(resolve =>
                setTimeout(resolve(console.log), 1000, values),
            )
        } catch (e) {
            setAlert({ message: e.message, severity: 'warning' })
        }
    }

    const validate = values => {
        const errors = {}

        if (!values.name) errors.name = true
        if (!values.email) errors.email = true
        if (!values.password) errors.password = true
        if (!values.passwordConfirm) errors.passwordConfirm = true

        return errors
    }

    return (
        <Grid item xs={12} zeroMinWidth={false}>
            <Grid
                container
                justify="center"
                alignItems="center"
                className={wrapper}
            >
                <Grid item xs={9}>
                    <Paper elevation={3} className={paper}>
                        <Container style={{ height: '100%' }}>
                            <Form
                                onSubmit={handleRequest}
                                validate={validate}
                                render={({ handleSubmit, submitting }) => (
                                    <form
                                        onSubmit={handleSubmit}
                                        className={form}
                                    >
                                        <Field
                                            name="name"
                                            render={({ input, meta }) => (
                                                <TextField
                                                    {...input}
                                                    error={
                                                        meta.touched &&
                                                        meta.error
                                                    }
                                                    helperText={
                                                        meta.touched &&
                                                        meta.error &&
                                                        'Required'
                                                    }
                                                    label="Nome"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                        <Field
                                            name="email"
                                            render={({ input, meta }) => (
                                                <TextField
                                                    {...input}
                                                    error={
                                                        meta.touched &&
                                                        meta.error
                                                    }
                                                    helperText={
                                                        meta.touched &&
                                                        meta.error &&
                                                        'Required'
                                                    }
                                                    label="Email"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                        <Field
                                            name="password"
                                            render={({ input, meta }) => (
                                                <TextField
                                                    {...input}
                                                    error={
                                                        meta.touched &&
                                                        meta.error
                                                    }
                                                    helperText={
                                                        meta.touched &&
                                                        meta.error &&
                                                        'Required'
                                                    }
                                                    type="password"
                                                    label="Password"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                        <Field
                                            name="passwordConfirm"
                                            render={({ input, meta }) => (
                                                <TextField
                                                    {...input}
                                                    error={
                                                        meta.touched &&
                                                        meta.error
                                                    }
                                                    helperText={
                                                        meta.touched &&
                                                        meta.error &&
                                                        'Required'
                                                    }
                                                    type="password"
                                                    label="Confirm Password"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                        <Button
                                            color="primary"
                                            type="submit"
                                            variant="contained"
                                            className={submitButton}
                                            disabled={submitting}
                                        >
                                            Create account
                                        </Button>
                                    </form>
                                )}
                            />
                        </Container>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}
