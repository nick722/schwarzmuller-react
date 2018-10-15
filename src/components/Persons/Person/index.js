import React, {Component} from 'react';

import './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
    }

    render() {
        const {name, age, children, click, change} = this.props;

        console.log('[Person.js] Inside render()');

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