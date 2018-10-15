import React, {Component} from 'react';

import './Person.css';

class Person extends Component {
    render() {
        const {name, age, children, click, change} = this.props;

        return (
            <div className="Person">
                <p onClick={click}>I'm {name} and I am {age} years old!</p>
                <p>{children}</p>
                <input
                    type="text"
                    onChange={change}
                    value={name}
                />
            </div>
        );
    };
}

export default Person;