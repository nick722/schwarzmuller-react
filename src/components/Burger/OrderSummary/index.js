import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render() {
    const {ingredients, purchaseCancel, purchaseContinue, price} = this.props;

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
                <p><strong> Total Price: {price.toFixed(2)} </strong></p>
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
}

export default OrderSummary;
