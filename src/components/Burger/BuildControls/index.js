import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const BuildControls = ({ ingredientAdd, ingredientRemove, disabled, price, purchasable }) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                add={() => ingredientAdd(ctrl.type)}
                remove={() => ingredientRemove(ctrl.type)}
                disabled={disabled[ctrl.type]}
            />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!purchasable}
        > ORDER NOW</button>
    </div>
);

export default BuildControls;