import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl';

const controls = [
    { labeL: 'Salad', type: 'salad' },
    { labeL: 'Bacon', type: 'bacon' },
    { labeL: 'Cheese', type: 'cheese' },
    { labeL: 'Meat', type: 'meat' },
];

const BuildControls = ({ ingredientAdd }) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                add={() => ingredientAdd(ctrl.type)}
            />
        ))}
    </div>
);

export default BuildControls;