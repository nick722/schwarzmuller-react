import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    openSideDrawerHandler = () => {
        this.setState({showSideDrawer: true});
    }

    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer: false});
    }

    render() {
        const { children } = this.props;

        return (
            <Aux>
                <Toolbar
                    openSideDrawer={this.openSideDrawerHandler}
                />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    close={this.closeSideDrawerHandler}
                />
                <main
                    className={classes.Content}
                >
                    {children}
                </main>
            </Aux>
        );
    }
}

export default Layout;