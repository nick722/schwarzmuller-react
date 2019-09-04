import React, { Component } from "react";
import classes from "./App.css";
import Person from "../components/Persons/Person/Person";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Kolya", age: 35 },
      { id: 2, name: "Piper", age: 26 },
      { id: 3, name: "Deacon", age: 34 }
    ],
    showPersons: false
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.userId === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  showHidePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      border: "1px solid green",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  change={event => this.changeNameHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button style={style} onClick={this.showHidePersonsHandler}>
          Show/Hide Persons
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
