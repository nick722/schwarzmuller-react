import React, {Component} from 'react';

import Person from './Person';

class Persons extends Component {
    render() {
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