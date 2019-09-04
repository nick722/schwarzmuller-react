import React from "react";
import classes from "../../containers/App.css";
import "./Cockpit.css";

const Cockpit = ({ clicked, persons, showPersons, style }) => {
  const assignedClasses = [];
  let btnClass = "";
  if (showPersons) btnClass = "Red";
  if (persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className="Cockpit">
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button style={style} onClick={clicked}>
        Show/Hide Persons
      </button>
    </div>
  );
};

export default Cockpit;
