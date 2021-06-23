import React from "react"

import makeStyles from "@material-ui/styles/makeStyles"

const useStyles = makeStyles(() => ({
    root: {
        marginBottom: 40,
        marginTop: 56,
        width: '100%',
    },
    cover: {
        height: 300,
        width: '100%',
        objectFit: 'cover',
    }
}));

export default function CoverImage(props) {
    const classes = useStyles();
    const {alt, url} = props;

    return (
        <div className={classes.root}>
            <img alt={alt} className={classes.cover} src={url} />
        </div>
    )
}