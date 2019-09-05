import React, { useEffect } from "react";
import classes from "../../containers/App.css";
import "./Cockpit.css";

const Cockpit = ({ clicked, persons, showPersons, style, title }) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
  });

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
      <h1>{title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button style={style} onClick={clicked}>
        Show/Hide Persons
      </button>
    </div>
  );
};

export default Cockpit;
