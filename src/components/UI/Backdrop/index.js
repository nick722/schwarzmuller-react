import React from 'react';

import classes from './Backdrop.css';

const Backdrop = ({ show, click }) => (
    show ? <div
        className={classes.Backdrop}
        onClick={click}
    ></div> : null
);

export default Backdrop;