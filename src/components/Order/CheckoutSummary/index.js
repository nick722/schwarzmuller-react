import React from 'react';

import Burger from '../../Burger';
import Button from '../../UI/Button';
import classes from './CheckoutSummary.css';

const CheckoutSummary = ({ ingredients }) => (
    <div className={classes.CheckoutSummary}>
        <h1>We hope it tastes well!</h1>
        <div style={{ width: '100%', margin: 'auto' }}>
            <Burger ingredients={ingredients}/>
        </div>
        <Button
            btnType="Danger"
        >
            CANCEL</Button>
        <Button
            btnType="Success"
        >
            CONTINUE</Button>
    </div>
);

export default CheckoutSummary;