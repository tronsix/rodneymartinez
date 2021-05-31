import React from 'react';
import { apiPost } from '../functions/api';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '72px',
    },
    form: {
        // display: 'flex',
        // flexWrap: 'wrap',
        marginTop: '32px',
    },
    textField: {
        '& fieldset': {
            borderRadius: '0',
        },
    },
    hidden: {
        display: "none",
    },
    button: {
        borderRadius: '0',
        padding: '8px 20px',
        border: '2px solid',
        '&:hover': {
            border: '2px solid',
        }
    }
}));

const initialState = {
    company: '',
    email: '',
    firstName: '',
    lastName: '',
    message: '',
}

export default function ContactForm() {
    const classes = useStyles();
    const [state, setState] = React.useState(initialState);

    const handleChange = e => {
        setState({ ...state, [e.target.id]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        apiPost('/contact-form', {
            email: state.email,
            first_name: state.firstName,
            last_name: state.lastName,
            company: state.company,
            message: state.message,
        }).then(({ data }) => {
            console.log(data);
        });
    }

    let contactInputs = [
            {
                gridWidth: 12,
                type: "hidden",
                name: "form-name",
                CSSGrid: classes.hidden,
                value: "My Website Form"
            },
            {
                gridWidth: 6,
                type: "text",
                name: "first name",
                id: "firstName",
                variant: "outlined",
                label: "First Name",
                multiline: false,
                rows: 1,
                fullWidth: true,
                required: true,
                value: state.firstName,
            },
            {
                gridWidth: 6,
                type: "text",
                name: "last name",
                id: "lastName",
                variant: "outlined",
                label: "Last Name",
                multiline: false,
                rows: 1,
                fullWidth: true,
                required: false,
                value: state.lastName,
            },
            {
                gridWidth: 12,
                type: "text",
                name: "company",
                id: "company",
                variant: "outlined",
                label: "Company",
                multiline: false,
                rows: 1,
                fullWidth: true,
                value: state.company,
            },
            {
                gridWidth: 12,
                type: "email",
                name: "email",
                id: "email",
                variant: "outlined",
                label: "Email",
                multiline: false,
                rows: 1,
                fullWidth: true,
                required: true,
                value: state.email,
            },
            {
                gridWidth: 12,
                type: "text",
                name: "message",
                id: "message",
                variant: "outlined",
                label: "Tell me about your company or project",
                multiline: true,
                rows: 8,
                fullWidth: true,
                required: true,
                value: state.message,
            }
        ]

        return (
            <div className={ classes.root }>
                <Typography color="secondary" variant="h6" >
                    Let's work together!
                </Typography>
                <Typography color="secondary" variant="body1" >
                    Fill out the form.
                </Typography>
                <form name="My Website Form" className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {/* Contact input fields */}
                        {contactInputs.map((input, i) =>
                            <Grid item
                                xs={input.gridWidth}
                                key={i}
                                className={input.CSSGrid}
                            >
                                <TextField
                                    className={classes.textField}
                                    fullWidth={input.fullWidth}
                                    id={input.id}
                                    label={input.label}
                                    multiline={input.multiline}
                                    name={input.name}
                                    onChange={handleChange}
                                    rows={input.rows}
                                    required={input.required}
                                    type={input.type}
                                    value={input.value}
                                    // variant={input.variant}
                                />
                            </Grid>
                        )}
                        <Grid item xs={4}>
                            <Button
                                className={classes.button}
                                type="submit"
                                variant="outlined"
                                color="primary"
                                fullWidth={true}
                            >
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );

}