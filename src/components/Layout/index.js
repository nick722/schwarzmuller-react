import React from 'react';

import Aux from '../../hoc/Auxiliary';
import './Layout.css';

const Layout = ({children}) => (
    <Aux>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main
            className="Content"
        >
            {children}
        </main>
    </Aux>
);

export default Layout;