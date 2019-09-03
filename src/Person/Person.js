import React from "react";

import "./Person.css";

const Person = ({ name, age, children, click, change }) => {
  const rnd = Math.random();
  if (rnd > 0.7) {
    throw new Error("Ooops, something went wrong!!");
  }

  return (
    <div className="Person">
      <p onClick={click}>
        I'm {name} and I am {age} years old!
      </p>
      <p>{children}</p>
      <input type="text" onChange={change} value={name} />
    </div>
  );
};

export default Person;
