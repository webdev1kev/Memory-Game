import { useState } from "react";

import bugIcon from "./../assets/icons/bug.svg";
import carIcon from "./../assets/icons/car.svg";
import flaskIcon from "./../assets/icons/flask.svg";
import futbulIcon from "./../assets/icons/futbol.svg";
import handSpockIcon from "./../assets/icons/hand-spock.svg";
import liraSignIcon from "./../assets/icons/lira-sign.svg";
import moonIcon from "./../assets/icons/moon.svg";
import snowflakeIcon from "./../assets/icons/snowflake.svg";
import sunIcon from "./../assets/icons/sun.svg";

import classes from "./Coin.module.css";

const Coin = (props) => {
  const [active, setActive] = useState(false);

  const activeClass = active ? classes.active : "";

  const clickHandler = () => {
    setActive(true);
  };

  return (
    <button
      className={`${classes["coin-button"]} ${activeClass} ${props.className} `}
    >
      <img src={bugIcon} alt="Bug Icon" />
      {!clicked && <div onClick={clickHandler} className={classes.cover}></div>}
    </button>
  );
};

export default Coin;
