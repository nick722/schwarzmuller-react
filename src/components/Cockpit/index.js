import React from 'react';

import './Cockpit.css';
import Auxiliary from '../../hoc/Auxiliary';

const Cockpit = ({persons, style, showHidePersons, appTitle}) => {

    const classes = [];

    if (persons.length <= 2) {
        classes.push('red');
    }
    if (persons.length <= 1) {
        classes.push('bold');
    }

    return (
        <Auxiliary>
            <h1>{appTitle}</h1>
            <p
                className={classes.join(' ')}
            >
                This is really working!</p>
            <button
                style={style}
                onClick={showHidePersons}
            >
                Show/Hide Persons
            </button>
        </Auxiliary>
    );
};

export default Cockpit;