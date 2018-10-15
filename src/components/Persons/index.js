import React from 'react';

import Person from './Person';

const Persons = ({persons, deletePerson, changeName}) =>
    persons.map((person, index) => (
        <Person
            click={() => deletePerson(index)}
            key={person.id}
            name={person.name}
            age={person.age}
            change={(event) => changeName(event, person.id)}
        />
    ));

export default Persons;