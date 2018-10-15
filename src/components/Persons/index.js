import React, {Component} from 'react';

import Person from './Person';

class Persons extends Component {
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

    render() {
        console.log('[Persons.js] Inside render()');

        const {persons, deletePerson, changeName} = this.props;
        return persons.map((person, index) => (
            <Person
                click={() => deletePerson(index)}
                key={person.id}
                name={person.name}
                age={person.age}
                change={(event) => changeName(event, person.id)}
            />
        ));
    }
}

export default Persons;