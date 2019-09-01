import React, { Component } from "react";
import Person from "./Person/Person";

import "./App.css";

class App extends Component {
  state = {
    persons: [
      {
        name: "Nick",
        age: 36
      },
      { name: "Piper", age: 29 }
    ],
    otherState: "some other state"
  };

  switchNameHandler = newName => {
    // this.state.persons[0].name = "Nikolai";
    this.setState({
      ...this.state,
      persons: [
        {
          name: newName,
          age: 36
        },
        { name: "Piper", age: 28 }
      ]
    });
  };

  render() {
    return (
      <div>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Bind")}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler("Arrow")}
        />
        <button onClick={this.switchNameHandler}>Switch name</button>
      </div>
    );
  }
}

export default App;
