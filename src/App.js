import React, { Component } from "react";
import Person from "./Person/Person";

import "./App.css";

class App extends Component {
  state = {
    persons: [{ name: "Nick", age: 36 }, { name: "Piper", age: 29 }],
    otherState: "some other state"
  };

  switchNameHandler = newName => {
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

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Bind")}
          changed={this.nameChangeHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler("Arrow")}
        />
        <button style={style} onClick={this.switchNameHandler}>
          Switch name
        </button>
      </div>
    );
  }
}

export default App;
