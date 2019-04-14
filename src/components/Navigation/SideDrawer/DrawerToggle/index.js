import React from "react";
import PropTypes from "prop-types";

import classes from "./DrawerToggle.css";

const DrawerToggle = ({ click }) => (
  <div className={classes.DrawerToggle} onClick={click}>
    <div />
    <div />
    <div />
  </div>
);

DrawerToggle.propTypes = {
  click: PropTypes.func.isRequired
};

export default DrawerToggle;
