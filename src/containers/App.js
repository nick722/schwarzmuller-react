import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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
        <Persons
          changed={e => this.changeNameHandler(e)}
          clicked={this.deletePersonHandler}
          persons={this.state.persons}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          clicked={this.showHidePersonsHandler}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          style={style}
        />
        {persons}
      </div>
    );
  }
}

export default App;
