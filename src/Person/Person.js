import React from "react";

import "./Person.css";

const Person = ({ name, age, changed, click }) => {
  return (
    <div className="Person">
      <p onClick={click}>
        I'm {name} and I'm {age} year old!
      </p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default Person;
