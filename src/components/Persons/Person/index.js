import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Person.css';
import {AuthContext} from '../../../containers/App';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    focus() {
        this.inputElement.current.focus();
    }

    render() {
        const {name, age, children, click, change} = this.props;

        console.log('[Person.js] Inside render()');

        return (

            <div className="Person">

                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated</p> : null}
                </AuthContext.Consumer>

                <p onClick={click}>I'm {name} and I am {age} years old!</p>
                <p>{children}</p>
                <input
                    ref={this.inputElement}
                    type="text"
                    onChange={change}
                    value={name}
                />
            </div>
        );
    };
}

Person.propTypes = {
    name: PropTypes.string.isRequired,
    click: PropTypes.func,
    age: PropTypes.number.isRequired,
    change: PropTypes.func
};

export default Person;