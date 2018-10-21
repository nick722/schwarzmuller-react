import React, {Component} from 'react';

import Aux from '../Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        const { children } = this.props;

        return (
            <Aux>
                <Toolbar
                    drawerToggleClick={this.sideDrawerToggleHandler}
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