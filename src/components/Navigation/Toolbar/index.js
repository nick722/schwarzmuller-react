import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import Menu from '../../UI/Menu';

const Toolbar = ({openSideDrawer}) => (
    <header className={classes.Toolbar}>
        <Menu
            openSideDrawer={openSideDrawer}
        />
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;
