import React from 'react';

import classes from './Menu.css';

const Menu = ({ openSideDrawer }) => (
    <div
        className={classes.Menu}
        onClick={openSideDrawer}
    >
        MENU
    </div>
);

export default Menu;
