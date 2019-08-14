import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '72px',
    },
    textField: {
        '& fieldset': {
            borderRadius: '0',
        },
    },
    button: {
        borderRadius: '0',
        border: '2px solid',
        '&:hover':{
            border: '2px solid',
        }
    },
}));

export const Contact = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <form className={classes.form} noValidate autoComplete="off">
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={6}>
                        <TextField
                            id="first-name"
                            className={classes.textField}
                            type = "text"
                            variant="outlined"
                            label="First Name"
                            color="secondary"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="last-name"
                            className={classes.textField}
                            type = "email"
                            variant="outlined"
                            label="Last Name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            className={classes.textField}
                            variant="outlined"
                            label="Email"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="message"
                            className={classes.textField}
                            multiline="true"
                            rows={8}
                            variant="outlined"
                            label="Message"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            // type = "submit"
                            variant="outlined"
                            color="primary"
                            fullWidth="true"
                            className={classes.button}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}