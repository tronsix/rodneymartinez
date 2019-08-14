import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: "72px"
    },
}));

export const About = () => {
    const classes = useStyles();
    
    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={6}>
                <Typography color="secondary" variant="h6" >
                    About
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography color="secondary" variant="body" >
                    fd fjjsd;f  js;aldjf l;kjd;fjsl djf;kdsj;fjs;dfkdjf;aldjfl
                    fklsdjf ;lkjds ;alj f;l dj a;fjd ;l s j f ;ajdl ;fjsad l;jflksjad
                    kdjf; lkjsdlk jf;lad js ;l fj.
                </Typography>
            </Grid>
        </Grid>
    );
}