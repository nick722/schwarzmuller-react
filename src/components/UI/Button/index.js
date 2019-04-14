import React from "react";

import classes from "./Button.css";

const Button = ({ children, click, btnType }) => (
  <button
    className={[classes.Button, classes[btnType]].join(" ")}
    onClick={click}
  >
    {children}
  </button>
);

export default Button;
