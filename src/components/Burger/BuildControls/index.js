import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl';

const controls = [
    { labeL: 'Salad', type: 'salad' },
    { labeL: 'Bacon', type: 'bacon' },
    { labeL: 'Cheese', type: 'cheese' },
    { labeL: 'Meat', type: 'meat' },
];

const BuildControls = ({ ingredientAdd, ingredientRemove, disabled, price }) => (
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
    </div>
);

export default BuildControls;