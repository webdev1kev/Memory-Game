import { useState } from "react";

import Button from "../base/Button";
import classes from "./ButtonGroup.module.css";

const ButtonGroup = (props) => {
  const [activeButton, setActiveButton] = useState(props.initial);

  const buttons = props.buttons;

  return (
    <div className={`${classes["button-group"]} ${props.className}`}>
      {buttons.map((button, i) => {
        return (
          <Button
            key={i}
            color={props.color}
            size={props.size}
            active={activeButton === button.name}
            onClick={() => {
              setActiveButton(button.name);
              button.onClick(button.name);
            }}
          >
            {button.name}
          </Button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
