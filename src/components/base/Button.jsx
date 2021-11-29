import { useState } from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  const size = classes[`${props.size}`];

  const color = !props.active ? classes[`${props.color}`] : "";
  const activeClass = props.active ? classes.active : "";

  const clickHandler = () => {
    props.onClick();
  };

  return (
    <button
      onClick={clickHandler}
      className={`${size} ${color} ${props.className} ${activeClass}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
