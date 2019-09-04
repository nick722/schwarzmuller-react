import React from "react";
import Person from "./Person/Person";

const Persons = ({ changed, clicked, persons }) =>
  persons.map((person, index) => (
    <Person
      click={() => clicked(index)}
      name={person.name}
      age={person.age}
      change={event => changed(event, person.id)}
    />
  ));

export default Persons;
