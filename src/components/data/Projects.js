import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

// Styles
const useStyles = makeStyles(theme => ({
    text: {
        padding: 16,
    },
    alignedRight: {
        textAlign: "right",
        marginRight: "8.3333%",
        [theme.breakpoints.down('xs')]: {
            marginRight: 0,
            margin: "0 auto",
        },
    },
    alignedLeft: {
        textAlign: "left",
        marginLeft: "8.3333%",
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
            margin: "0 auto",
        },
    },
    alignedCenter: {
        textAlign: "center",
        margin: "0 auto",
    },
}));


// Variables
const assetsURL = process.env.PUBLIC_URL + "/assets/";

const Wrapper = (props) => {
    const classes = useStyles();

    return (
        <div className={`${classes.text} ${classes.alignedLeft}`}>{props.children}</div>
    );
}

const getLink = (title) => {
    let str = "/" + title;
    str = str.replace(/\s/g, "-");
    return (
        str.toLocaleLowerCase()
    )
}

export const Projects = [
    {
        title: "Rocket Dollar Onboarding",
        get link() {
            return getLink(this.title);
        },
        mainImage: assetsURL + "project-1.png",
        gridTiles: [
            {
                elementType: "image",
                cols: {
                    xs: 12,
                    md: 6,
                },
                imageSrc: assetsURL + "project-1.png",
                imageAlt: "image",
                heading: null,
                body: null,
            },
            {
                elementType: "copy",
                cols: {
                    xs: 12,
                    md: 6,
                },
                imageSrc: assetsURL + "",
                imageAlt: "image",
                copy: {
                    heading: "Rocket Dollar Onboarding",
                    get headingTag() {
                       return <Typography variant="h1">{this.heading}</Typography>
                    },
                    body: `When I first arrived to Rocket Dollar they had already launched the
                    first version of thier onboarding process. When the process was built RD
                    was less than 6 months old and just needed a way to get customers to select
                    and purchase a product. The original design was built off intuition. `,
                    get bodyTag() {
                        return <Typography variant="body1">{this.body}</Typography>
                     },
                    get wrapper() {
                        return (
                            <Wrapper>
                                {this.headingTag}
                                {this.bodyTag}
                            </Wrapper>
                        )
                    }, 
                },
                align: "left",
            },
            {
                elementType: "space",
                cols: {
                    xs: 12,
                    md: 6,
                },
                imageSrc: null,
                imageAlt: null,
                heading: null,
                body: null,
            },
            {
                elementType: "space",
                cols: {
                    xs: 12,
                    md: 6,
                },
                imageSrc: null,
                imageAlt: null,
                heading: null,
                body: null,
            },
            {
                elementType: "space",
                cols: {
                    xs: 12,
                    md: 6,
                },
                imageSrc: null,
                imageAlt: null,
                heading: null,
                body: null,
            },
            {
                elementType: "space",
                cols: {
                    xs: 12,
                    md: 6,
                },
                imageSrc: null,
                imageAlt: null,
                heading: null,
                body: null,
            },
            {
                elementType: "space",
                cols: {
                    xs: 12,
                    md: 6,
                },
                imageSrc: null,
                imageAlt: null,
                heading: null,
                body: null,
            }
        ]
    },
    {
        title: "Rocket Dollar Website",
        get link() {
            return getLink(this.title);
        },
        mainImage: assetsURL + "project-1.png",
        gridTiles: [
            {
                elementType: "image",
                cols: {
                    xs: 12,
                    md: 6,
                },
                imageSrc: assetsURL + "project-1.png",
                imageAlt: "image",
                heading: null,
                body: null,
            },
            {
                elementType: "copy",
                cols: {
                    xs: 12,
                    md: 6,
                },
                imageSrc: assetsURL + "",
                imageAlt: "image",
                copy: {
                    heading: "heading",
                    get headingTag() {
                       return <Typography variant="h2">{this.heading}</Typography>
                    },
                    body: "body",
                    get bodyTag() {
                        return <Typography variant="body1">{this.body}</Typography>
                     },
                    get wrapper() {
                        return (
                            <Wrapper>
                                {this.headingTag}
                                {this.bodyTag}
                            </Wrapper>
                        )
                    }, 
                },
                align: "left",
            },
            {
                elementType: "space",
                cols: {
                    xs: 12,
                    md: 6,
                },
                imageSrc: null,
                imageAlt: null,
                heading: null,
                body: null,
            },
            {
                elementType: "space",
                cols: {
                    xs: 12,
                    md: 6,
                },
                imageSrc: null,
                imageAlt: null,
                heading: null,
                body: null,
            },
            {
                elementType: "space",
                cols: {
                    xs: 12,
                    md: 6,
                },
                imageSrc: null,
                imageAlt: null,
                heading: null,
                body: null,
            },
            {
                elementType: "space",
                cols: {
                    xs: 12,
                    md: 6,
                },
                imageSrc: null,
                imageAlt: null,
                heading: null,
                body: null,
            },
            {
                elementType: "space",
                cols: {
                    xs: 12,
                    md: 6,
                },
                imageSrc: null,
                imageAlt: null,
                heading: null,
                body: null,
            },
            {
                elementType: "space",
                cols: {
                    xs: 12,
                    md: 6,
                },
                imageSrc: null,
                imageAlt: null,
                heading: null,
                body: null,
            }
        ]
    }
]