import React from "react";

import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/styles";

// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    alignContent: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    margin: "48px 0 48px",
    borderRadius: "0",
    border: "2px solid",
    "&:hover": {
      border: "2px solid",
    },
  },
}));

export default function ScrollToTop() {
  const classes = useStyles();
  const scrollTop = () => {
    // temporary fix for scroll top not supported on
    // edge, explorer, and mobile safari
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.root}>
      <Button
        children="Back to Top"
        className={classes.button}
        onClick={scrollTop}
        color="primary"
        variant="outlined"
      />
    </div>
  );
}
