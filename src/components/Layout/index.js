import React from 'react';

import Aux from '../../hoc/Auxiliary';

const Layout = ({children}) => (
    <Aux>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main>
            {children}
        </main>
    </Aux>
);

export default Layout;