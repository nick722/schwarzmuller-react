import React from 'react';

import './Cockpit.css';

const Cockpit = ({persons, style, showHidePersons}) => {
    //showPersons,

    const classes = [];

    if (persons.length <= 2) {
        classes.push('red');
    }
    if (persons.length <= 1) {
        classes.push('bold');
    }

    // let btnClass = '';
    // btnClass = 'red';

    return (
        <div
            // className="Cockpit"
        >
            <h1>Hi, I'm a YN Todo React App</h1>
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