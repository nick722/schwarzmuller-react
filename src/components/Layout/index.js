import React from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar';

const Layout = ({children}) => (
    <Aux>
        <Toolbar/>
        <main
            className={classes.Content}
        >
            {children}
        </main>
    </Aux>
);

export default Layout;