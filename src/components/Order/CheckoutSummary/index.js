import React from 'react';

import Burger from '../../Burger';
import Button from '../../UI/Button';
import classes from './CheckoutSummary.css';

const CheckoutSummary = ({ ingredients, checkoutCancel, checkoutContinue }) => (
    <div className={classes.CheckoutSummary}>
        <h1>We hope it tastes well!</h1>
        <div style={{ width: '100%', margin: 'auto' }}>
            <Burger ingredients={ingredients}/>
        </div>
        <Button
            btnType="Danger"
            click={ checkoutCancel }
        >
            CANCEL</Button>
        <Button
            btnType="Success"
            click={ checkoutContinue }
        >
            CONTINUE!</Button>
    </div>
);

export default CheckoutSummary;