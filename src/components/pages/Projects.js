import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button } from '@material-ui/core';

// Styles
const usestyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginTop: '56px',
    },
    container: {
        justifyContent: "center",
    },
    gridItem: {
        maxWidth: 480,
        maxHeight: "auto",
    },
    placeholder: {
        backgroundColor: "#efefef",
        width: "100%",
        height: "100%",
    },
    button: {
        margin: "48px 0 96px",
        borderRadius: '0',
        border: '2px solid',
        '&:hover': {
            border: '2px solid',
        }
    },
}));

const scrollTop = () => {
// temporary fix for scroll top not supported on 
// edge, explorer, and mobile safari
    window.scrollTo(0,0);
}

export const Projects = (props) => {
    const classes = usestyles();

    function GetElementType(elementType, image, copy) {
        if (elementType === 'image') {
            return (
                <Fragment>{image.wrapper}</Fragment>
            );
        } else if (elementType === 'copy') {
            return (
                <Fragment>{copy.wrapper}</Fragment>
            );
        } else if (elementType === 'space') {
                return (
                    <div className={`${classes.placeholder} space`}></div>
                );
            } else {
                return (
                    <div> Element to be rendered not defined. </div>
                );
            }
        }

        return (
            <div className={classes.root}>
                <Grid container className={classes.container} spacing={2}>
                    {props.data.map(({ elementType, cols, image, copy }, i) => (
                        <Grid item
                            className={classes.gridItem}
                            xs={cols.xs}
                            sm={cols.sm}
                            md={cols.md}
                            lg={cols.lg}
                            key={i}
                        >
                            {GetElementType(elementType, image, copy)}
                        </Grid>
                    ))
                    }
                </Grid>
                <Button 
                    className={classes.button} 
                    onClick={scrollTop}
                    color="primary"
                    variant="outlined"
                >
                    Back to Top
                </Button>
            </div>
        );

    }