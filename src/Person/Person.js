import React from "react";

const Person = ({ name, age, click }) => {
  return (
    <div>
      <p onClick={click}>
        I'm {name} and I'm {age} year old!
      </p>
    </div>
  );
};

export default Person;
