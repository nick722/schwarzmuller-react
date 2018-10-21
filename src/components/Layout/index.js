import React from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

const Layout = ({children}) => (
    <Aux>
        <Toolbar/>
        <SideDrawer/>
        <main
            className={classes.Content}
        >
            {children}
        </main>
    </Aux>
);

export default Layout;