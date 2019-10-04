import React from 'react';
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

export const ContactForm = () => {
    const classes = useStyles();

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
                name: "first_name",
                id: "first-name",
                variant: "outlined",
                label: "First Name",
                multiline: false,
                rows: 1,
                fullWidth: true,
                required: true
            },
            {
                gridWidth: 6,
                type: "text",
                name: "last_name",
                id: "last-name",
                variant: "outlined",
                label: "Last Name",
                multiline: false,
                rows: 1,
                fullWidth: true,
                required: false
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
                required: true
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
                required: true
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
                <form name="My Website Form" method="post" data-netlify="true" className={classes.form}>
                    <Grid container spacing={2}>
                        {/* Contact input fields */}
                        {contactInputs.map((input, i) =>
                            <Grid item
                                xs={input.gridWidth}
                                key={i}
                                className={input.CSSGrid}
                            >
                                <TextField
                                    id={input.id}
                                    className={classes.textField}
                                    type={input.type}
                                    name={input.name}
                                    value={input.value}
                                    variant={input.variant}
                                    label={input.label}
                                    multiline={input.multiline}
                                    rows={input.rows}
                                    fullWidth={input.fullWidth}
                                    required={input.required}
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