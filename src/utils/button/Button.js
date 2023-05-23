import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return <div className={classes[props.type]}>{props.children}</div>;
};

export default Button;
