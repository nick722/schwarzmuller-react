import React from 'react';

import classes from './Logo.css';


import burgerLogo from '../../assets/images/132 burger-logo.png';

const Logo = () => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurgerLogo"/>
    </div>
);

export default Logo;
