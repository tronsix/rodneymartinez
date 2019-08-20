import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button } from '@material-ui/core';

// const useStyles = makeStyles({
//     root: {
//     },
//     form: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         marginTop: '72px',
//     },
//     textField: {
//         '& fieldset': {
//             borderRadius: '0',
//         },
//     },
//     button: {
//         borderRadius: '0',
//         border: '2px solid',
//         '&:hover': {
//             border: '2px solid',
//         }
//     },
// });

export class ContactForm extends Component {

    state = {
        contactInputs: [
            {
                key: 1,
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
                key: 2,
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
                key: 3,
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
                key: 4,
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
            <form>
                <Grid container spacing={2}>
                    {/* Contact input fields */}
                    {this.state.contactInputs.map(input =>
                        <Grid item
                            xs={input.gridWidth}
                            key={input.key.toString()}
                        >
                            <TextField
                                id={input.id}
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
                            // className={classes.button}
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
        );
    }
}

