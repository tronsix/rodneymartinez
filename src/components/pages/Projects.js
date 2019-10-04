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
        marginTop: '72px',
    },
    gridItem: {
        width: "100%",
        height: 350,
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },
    text: {
        padding: 16,
    },
    alignedRight: {
        textAlign: "right",
        marginRight: "8.3333%",
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            margin: "0 auto",
        },
    },
    alignedLeft: {
        textAlign: "left",
        marginLeft: "8.3333%",
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            margin: "0 auto",
        },
    },
    alignedCenter: {
        textAlign: "center",
        margin: "0 auto",
    },
    placeholder: {
        backgroundColor: "#efefef",
        width: "100%",
        height: "100%",
    },
    button: {
        margin: "48px 0 96px",
    },
}));

export const Projects = (props) => {
    const classes = usestyles();

    function GetElementType(elementType, imageSrc, imageAlt,copy, align) {
        if (elementType === 'image') {
            return (
                <img src={imageSrc} alt={imageAlt} className={classes.image} />
            );
        } else if (elementType === 'copy') {
            if (align === 'left') {
                return (
                    <Fragment>{copy.wrapper}</Fragment>
                );
            } else if (align === 'right') {
                return (
                    <Fragment>{copy.wrapper}</Fragment>
                );
            } else if (align === 'center') {
                return (
                    <Fragment>{copy.wrapper}</Fragment>
                );
            }     
        } else if (elementType === 'space') {
                return (
                    <div className={classes.placeholder}></div>
                );
            } else {
                return (
                    <div> Element to be rendered not defined. </div>
                );
            }
        }

        return (
            <div className={classes.root}>
                <Grid container spacing={2}>
                    {props.data.map(({ elementType, cols, imageSrc, imageAlt, copy, align }, i) => (
                        <Grid item
                            className={classes.gridItem}
                            xs={cols.xs}
                            md={cols.md}
                            key={i}
                        >
                            {GetElementType(elementType, imageSrc, imageAlt, copy, align)}
                        </Grid>
                    ))
                    }
                </Grid>
                <Button className={classes.button}>Back to Top</Button>
            </div>
        );

    }