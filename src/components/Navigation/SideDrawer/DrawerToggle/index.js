import React from 'react';

import classes from './DrawerToggle.css';

const DrawerToggle = ({ click }) => (
    <div
        className={classes.Menu}
        onClick={click}
    >
        MENU
    </div>
);

export default DrawerToggle;
