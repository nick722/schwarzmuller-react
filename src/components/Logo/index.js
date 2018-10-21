import React from 'react';

import classes from './Logo.css';


import burgerLogo from '../../assets/images/132 burger-logo.png';

const Logo = (props) => (
    <div className={classes.Logo}
    style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurgerLogo"/>
    </div>
);

export default Logo;
