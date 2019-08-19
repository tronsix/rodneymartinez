import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles({
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
        '&:hover': {
            border: '2px solid',
        }
    },
});

export const ContactForm = ({ contact }) => {
    
    let firstName = React.createRef();
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName.current.value);
    }

    const classes = useStyles();

    return (
        < form className = { classes.form } onSubmit={handleSubmit}>
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={6}>
                    <TextField
                        id="first-name"
                        className={classes.textField}
                        type="text"
                        inputRef= {firstName}
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
                        type="text"
                        variant="outlined"
                        label="Last Name"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="email"
                        className={classes.textField}
                        type="email"
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
                        type="text"
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
                        className={classes.button}
                        type="submit"
                        variant="outlined"
                        color="primary"
                        fullWidth="true"
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form >
    )
}

