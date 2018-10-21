import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button';

const OrderSummary = ({ingredients, purchaseCancel, purchaseContinue}) => {
    const ingredientSummary = Object.keys(ingredients)
        .map(igKey => {
            return (
                <li
                    key={igKey}
                >
                    <span
                        style={{textTransform: 'capitalize'}}
                    >
                        {igKey}
                    </span>
                    : {ingredients[igKey]}
                </li>);
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button
                btnType="Danger"
                click={purchaseCancel}
            >
                CANCEL</Button>
            <Button
                btnType="Success"
                click={purchaseContinue}
            >
                CONTINUE</Button>
        </Aux>
    );
};

export default OrderSummary;