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
import api from '../../services/api'
import LoggedContext from '../Contexts/LoggedContext'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    wrapper: {
        height: '500px',
    },
    paper: {
        height: '225px',
        padding: '20px 0',
    },
    form: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    submitButton: {
        marginTop: '18px',
    },
})

export default () => {
    const history = useHistory()

    const { paper, wrapper, form, submitButton } = useStyles()

    const { setAlert, setLogged } = useContext(LoggedContext)

    const handleRequest = async values => {
        try {
            const data = await api.post('/graphql', {
                query: `
                mutation{
                    login(data:{email: "${values.email}" password: "${values.password}"})
                }
                `,
            })

            const user = data.data.data.login

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
                                render={({ handleSubmit, submitting }) => (
                                    <form
                                        onSubmit={handleSubmit}
                                        className={form}
                                    >
                                        <Field
                                            name="email"
                                            render={({ input }) => (
                                                <TextField
                                                    {...input}
                                                    label="Email"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                        <Field
                                            name="password"
                                            render={({ input }) => (
                                                <TextField
                                                    {...input}
                                                    label="Password"
                                                    type="password"
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
                                            Login
                                        </Button>
                                        <Button
                                            color="primary"
                                            variant="text"
                                            style={{ marginTop: '5px' }}
                                            onClick={() =>
                                                history.push('/register')
                                            }
                                        >
                                            create account
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
