import React, { Component } from "react";
import Person from "./Person/Person";

import "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Nick", age: 36 },
      { id: "2", name: "Piper", age: 29 }
    ],
    otherState: "some other state",
    showPersons: false
  };

  nameChangeHandler = event => {
    this.setState({
      ...this.state,
      persons: [
        {
          name: event.target.value,
          age: 36
        },
        { name: "Piper", age: 28 }
      ]
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, i) => (
            <Person
              click={() => this.deletePersonHandler(i)}
              name={person.name}
              age={person.age}
              key={person.id}
            />
          ))}
        </div>
      );
    }

    return (
      <div>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
