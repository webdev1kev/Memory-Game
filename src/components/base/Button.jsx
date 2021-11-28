import { useState } from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  const [active, setActive] = useState(false);

  const size = classes[`${props.size}`];

  const color = !active ? classes[`${props.color}`] : "";
  const activeClass = active ? classes.active : "";

  const clickHandler = () => {
    if (!active) return setActive(true);
    setActive(false);
    props.onClick();
  };

  return (
    <button
      onClick={clickHandler}
      className={`${size} ${color} ${activeClass} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
