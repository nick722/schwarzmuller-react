import React from 'react';

import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import classes from './SideDrawer.css';

const SideDrawer = () => {
    // animation

    return (
        <div className={classes.SideDrawer}>
            <Logo height="11%"/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    );
};

export default SideDrawer;
