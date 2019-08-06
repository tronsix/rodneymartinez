import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));

export default function Contact() {

    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={6}>
                <Grid>
                <form className={classes.container} noValidate autoComplete="off">
                    <Grid item xs={6}>
                        <TextField
                            id="first-name"
                            label="First Name"
                            style={{ margin: 8 }}
                            helperText="Full width!"
                            fullWidth
                            margin="dense"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="last-name"
                            label="Last Name"
                            style={{ margin: 8 }}
                            helperText="Full width!"
                            fullWidth
                            margin="dense"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            label="Email"
                            style={{ margin: 8 }}
                            helperText="Full width!"
                            fullWidth
                            margin="dense"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="message"
                            label="Message"
                            style={{ margin: 8 }}
                            helperText="Full width!"
                            fullWidth
                            margin="dense"
                            variant="outlined"
                        />
                    </Grid>
                </form>
                </Grid>
            </Grid>
        </Grid>
    );
}