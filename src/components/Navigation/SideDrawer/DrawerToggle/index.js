import React from 'react';

import classes from './DrawerToggle.css';

const DrawerToggle = ({ click }) => (
    <div
        className={classes.DrawerToggle}
        onClick={click}
    >
       <div></div>
       <div></div>
       <div></div>
    </div>
);

export default DrawerToggle;
