import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, Fab } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    root: {
        marginTop: "72px"
    },
    bioPic: {
        width: "100%"
    },
    divider: {
        backgroundColor: "#EFEFEF",
        height: '2px',
        width: '100%',
        margin: '32px 0'
    },
    svg: {
        fill: "none",
        height: "20px",
        width: "20px",
    },
    fab: {
        margin: theme.spacing(1),
        backgroundColor: "#0073b1",
        '&:hover': {
            backgroundColor: "#0084bf",
        }
    },
    linkedIn: {
        fill: theme.palette.background.default
    },
    button: {
        borderRadius: '0',
        border: '2px solid',
        '&:hover': {
            border: '2px solid',
        }
    },
}));

export const About = () => {
    const publicURL = process.env.PUBLIC_URL,
        assetsURL = "/assets/",
        classes = useStyles();

    return (
        <Grid container spacing={4} className={classes.root}>
            <Grid item xs={6}>
                <img
                    src={publicURL + assetsURL + "bio-pic.jpg"}
                    alt="Rodney"
                    className={classes.bioPic} />
            </Grid>
            <Grid item xs={6}>
                <Typography color="secondary" variant="h6" >
                    About Me
                </Typography>
                <Typography color="secondary" variant="body1" >
                    Rodney is an experienced designer and front end engineer at Rocket Dollar.
                    He is a well rounded creative with technical and product development experience.
                    Rodney is a former Techstars Associate and the former Head of Account Management
                    at BlueCheck, Inc., an Identity Verification platform for online transactions.
    ‍                <br /><br />
                    Martinez currently lives in Austin and enjoys cooking gourmet meals,
                    enjoying the great outdoors, and practicing yoga when he’s not busy
                    building assets for Rocket Dollar. He graduated from The University
                    of Colorado at Denver with a BFA in Film Production.
                </Typography>
                <Fab
                    variant="round"
                    size="small"
                    aria-label="add"
                    className={classes.fab}
                >
                    <svg id="Brands" className={classes.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                        <defs>
                        </defs>
                        <title>linkedin</title>
                        <g id="linkedin">
                            <rect width="25" height="25" />
                            <path className={classes.linkedIn} d="M7,22.5H2.83V9.15H7ZM4.9,7.33a2.42,2.42,0,0,1,0-4.83,2.42,2.42,0,0,1,0,4.83ZM22.5,22.5H18.36V16c0-1.55,0-3.54-2.16-3.54s-2.48,1.69-2.48,3.43V22.5H9.57V9.15h4V11h.06a4.34,4.34,0,0,1,3.92-2.16c4.2,0,5,2.77,5,6.35V22.5Z" />
                        </g>
                    </svg>
                </Fab>
                <div className={classes.divider}></div>
                <Grid container>
                    <Grid item xs={6}>
                        <Button
                            className={classes.button}
                            color="primary"
                            variant="outlined"
                        >View Resume</Button>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
}