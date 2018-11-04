import React from "react";

import classes from "./Button.css";

const Button = ({ children, click, btnType, disabled }) => (
  <button
    disabled={disabled}
    className={[classes.Button, classes[btnType]].join(" ")}
    onClick={click}
  >
    {children}
  </button>
);

export default Button;
