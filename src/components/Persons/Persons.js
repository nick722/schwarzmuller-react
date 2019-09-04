import React from "react";
import Person from "./Person/Person";

const Persons = ({ changed, clicked, persons }) => {
  console.log("[Persons.js] rendering...");
  return persons.map((person, index) => {
    return (
      <Person
        click={() => clicked(index)}
        name={person.name}
        age={person.age}
        change={event => changed(event, person.id)}
      />
    );
  });
};

export default Persons;
