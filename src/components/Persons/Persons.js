import React from "react";
import Person from "./Person/Person";

const Persons = ({ deletePerson, persons }) =>
  persons.map((person, index) => (
    <Person
      click={() => deletePerson(index)}
      name={person.name}
      age={person.age}
      change={event => this.changeNameHandler(event, person.id)}
    />
  ));

export default Persons;
