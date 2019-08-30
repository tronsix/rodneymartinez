import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, TextField, Button } from '@material-ui/core';

const styles = {
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
    button: {
        borderRadius: '0',
        border: '2px solid',
        '&:hover': {
            border: '2px solid',
        }
    },
};

class ContactForm extends Component {

    state = {
        contactInputs: [
            {
                key: "first_name",
                gridWidth: 6,
                classes: [],
                id: "first-name",
                type: "text",
                variant: "outlined",
                label: "First Name",
                multiline: false,
                rows: 1,
                fullWidth: true,
                required: true
            },
            {
                key: "last_name",
                gridWidth: 6,
                classes: [],
                id: "last-name",
                type: "text",
                variant: "outlined",
                label: "Last Name",
                multiline: false,
                rows: 1,
                fullWidth: true,
                required: false
            },
            {
                key: "email",
                gridWidth: 12,
                classes: [],
                id: "email",
                type: "email",
                variant: "outlined",
                label: "Email",
                multiline: false,
                rows: 1,
                fullWidth: true,
                required: true
            },
            {
                key: "message",
                gridWidth: 12,
                classes: [],
                id: "message",
                type: "text",
                variant: "outlined",
                label: "Message",
                multiline: true,
                rows: 8,
                fullWidth: true,
                required: true
            }
        ]
    }

    render() {
        return (
            <div className={ this.props.classes.root }>
                <Typography color="secondary" variant="h6" >
                    Howdy friend!
                </Typography>
                <Typography color="secondary" variant="body1" >
                    Have a project idea? Send me a message.
                </Typography>
                <form name="contact" method="POST" data-netlify="true" className={this.props.classes.form}>
                    <Grid container spacing={2}>
                        {/* Contact input fields */}
                        {this.state.contactInputs.map(input =>
                            <Grid item
                                xs={input.gridWidth}
                                key={input.key}
                            >
                                <TextField
                                    id={input.id}
                                    className={this.props.classes.textField}
                                    type={input.type}
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
                                className={this.props.classes.button}
                                type="submit"
                                variant="outlined"
                                color="primary"
                                fullWidth={true}
                            >
                                Submit
                        </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(ContactForm);