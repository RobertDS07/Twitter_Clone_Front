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
import { useHistory } from 'react-router-dom'
import api from '../../services/api'

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
    button: {
        marginTop: '10px',
        '&.lastButton': {
            marginBottom: '10px',
        },
    },
})

export default () => {
    const history = useHistory()

    const { paper, wrapper, form, button } = useStyles()

    const { setAlert, setLogged } = useContext(LoggedContext)

    const handleRequest = async values => {
        try {
            if (values.password !== values.passwordConfirm)
                throw new Error('Password must be the same')

            const data = await api.post('/graphql', {
                query: `
                    mutation{
                        createUser(data:{name: "${values.name}" email: "${values.email}" password:"${values.password}"})
                    }
                `,
            })

            const user = data.data.data.createUser

            if (!user)
                throw new Error('Algo de errado ocorreu, tente novamente')

            localStorage.setItem('identity', user)

            setLogged(user)
        } catch (e) {
            console.log(e)
            setAlert({
                message:
                    (e.response && e.response.data.errors[0].message) ||
                    e.message,
                severity: 'error',
            })
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
                                            className={button}
                                            disabled={submitting}
                                        >
                                            Create account
                                        </Button>
                                        <Button
                                            color="primary"
                                            variant="text"
                                            onClick={() => history.push('/')}
                                            className={`${button} lastButton`}
                                        >
                                            Login
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
