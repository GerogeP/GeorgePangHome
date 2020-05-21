import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import { boxShadow } from "assets/jss/material-dashboard-react";

const styles = {
  grid: {
    // border: "1px solid rgba(9,9,9,.5)",
    radius: "5px",
    margin: "0px",
    elevattion: "15px",
    boxshadow: "0 15px 15px 15px rgba(9,9,9,.8)",
    padding: "5px 15px !important"
  }
};

const useStyles = makeStyles(styles);

export default function GridItem(props) {
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}

GridItem.propTypes = {
  children: PropTypes.node
};
