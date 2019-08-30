import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { GridList, GridListTile, Button, Typography } from '@material-ui/core';

// Styles
const usestyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginTop: '72px',
    },
    gridList: {
        width: "100%",
        height: "auto",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
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

    function GetElementType(elementType, imageSrc, imageAlt, heading, body) {
        if (elementType === 'image'){
            return(
                <img src={imageSrc} alt={imageAlt} className={classes.image}/>
            );
        } else if (elementType ==='copy'){
            return(
                <Fragment>
                    <Typography variant="h6">{heading}</Typography>
                    <Typography variant="body1">{body}</Typography>
                </Fragment>
            );
        } else if (elementType === 'space'){
            return(
                <div className={classes.placeholder}></div>
            );
        } else {
            return(
                <div> Element to be rendered not defined. </div>
            );
        }
    }

    return (
        <div className={classes.root}>
            <GridList
                cellHeight={450}
                className={classes.gridList}
                spacing={32}
                cols={6}
            >
                {props.data.map(({elementType, cols, imageSrc, imageAlt, heading, body}, i) => (
                    <GridListTile key={i} cols={cols}>
                        {GetElementType(elementType, imageSrc, imageAlt, heading, body)}
                    </GridListTile>
                ))
                }
            </GridList>
            <Button className={classes.button}>Back to Top</Button>
        </div>
    );

}