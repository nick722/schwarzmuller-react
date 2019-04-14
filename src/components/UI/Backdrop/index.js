import React from "react";

import classes from "./Backdrop.css";

const Backdrop = ({ show, click }) =>
  show ? <div className={classes.Backdrop} onClick={click} /> : null;

export default Backdrop;
