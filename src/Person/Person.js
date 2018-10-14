import React from 'react';
import Radium from 'radium';

import './Person.css';

const Person = ({name, age, children, click, change}) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
    <div className="Person" style={style}>
        <p onClick={click}>I'm {name} and I am {age} years old!</p>
        <p>{children}</p>
        <input
            type="text"
            onChange={change}
            value={name}
        />
    </div>
)}

export default Radium(Person);