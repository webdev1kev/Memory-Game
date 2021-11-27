import { useState } from "react";
import useClassBundler from "../../hooks/useClassBundler";

import bugIcon from "./../../assets/icons/bug.svg";
import carIcon from "./../../assets/icons/car.svg";
import flaskIcon from "./../../assets/icons/flask.svg";
import futbulIcon from "./../../assets/icons/futbol.svg";
import handSpockIcon from "./../../assets/icons/hand-spock.svg";
import liraSignIcon from "./../../assets/icons/lira-sign.svg";
import moonIcon from "./../../assets/icons/moon.svg";
import snowflakeIcon from "./../../assets/icons/snowflake.svg";
import sunIcon from "./../../assets/icons/sun.svg";

import classes from "./Coin.module.css";

const Coin = (props) => {
  const [clicked, setClicked] = useState(false);

  const activeClass = clicked ? classes.active : "";
  const sizeClass = props.size;

  const clickHandler = () => {
    setClicked(true);
  };

  return (
    <li>
      <button
        className={`${classes["coin-button"]} ${props.className} ${activeClass} ${sizeClass}`}
      >
        <img src={bugIcon} alt="Bug Icon" />
        {!clicked && (
          <div onClick={clickHandler} className={classes.cover}></div>
        )}
      </button>
    </li>
  );
};

export default Coin;
