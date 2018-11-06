import React from "react";

import classes from "./Toolbar.css";
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle";

const Toolbar = ({ drawerToggleClick }) => (
  <header className={classes.Toolbar}>
    <DrawerToggle click={drawerToggleClick} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
