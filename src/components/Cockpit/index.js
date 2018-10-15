import React from 'react';

import './Cockpit.css';

const Cockpit = ({persons, style, showHidePersons, appTitle}) => {

    const classes = [];

    if (persons.length <= 2) {
        classes.push('red');
    }
    if (persons.length <= 1) {
        classes.push('bold');
    }

    return (
        <div
        >
            <h1>{ appTitle }</h1>
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
        </div>
    );
};

export default Cockpit;