import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps");
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforUpdate");
    return { message: "Snapshot!!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log("snapshot:", snapshot);
  }

  render() {
    const { changed, clicked, persons } = this.props;
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
  }
}

export default Persons;
