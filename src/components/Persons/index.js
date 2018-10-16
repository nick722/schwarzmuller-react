import React, {PureComponent} from 'react';

import Person from './Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState)
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changeName !==this.props.changeName  ||
    //         nextProps.deletePerson !==this.props.deletePerson;
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState)
    }

    componentDidUpdate () {
        console.log('[Persons.js] Inside componentDidUpdate()');
    }

    render() {
        console.log('[Persons.js] Inside render()');

        const {persons, deletePerson, changeName} = this.props;
        return persons.map((person, index) => (
            <Person
                click={() => deletePerson(index)}
                key={person.id}
                position={index}
                name={person.name}
                age={person.age}
                change={(event) => changeName(event, person.id)}
            />
        ));
    }
}

export default Persons;