import React from 'react';

import classes from './BuildControl.css';

const BuildControl = ({ label, add }) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{label}</div>
        <button className={classes.Less}>Less</button>
        <button
            className={classes.More}
            onClick={add}
        >
            More</button>
    </div>
);

export default BuildControl;