import { useState, useContext, useEffect } from "react";

import { GameContext } from "../../context/gameState";
import compareCoins from "../../helpers/compareCoins";
import { selectedCoins } from "../../helpers/compareCoins";

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
  const [matched, setMatched] = useState(false);
  const gameState = useContext(GameContext).gameState;
  const gameActions = useContext(GameContext).gameActions;

  const sizeClass = props.sizeClass ? "big" : "";
  const matchedClass = matched ? classes.matched : "";

  if (gameState.reset && clicked) {
    setClicked(false);
    setMatched(false);
  }

  const clickHandler = () => {
    setClicked(true);

    selectedCoins.push({ name: props.name, setClicked, setMatched });

    if (selectedCoins.length === 2) {
      compareCoins(selectedCoins);
      gameActions.updateMovesCounter();
    }
  };

  return (
    <li>
      <button
        className={`${classes["coin-button"]} ${props.className} ${classes[sizeClass]} ${matchedClass}`}
      >
        <div className={classes["icon-frame"]}>
          <img src={props.icon} alt="" />
        </div>

        {!clicked && (
          <div onClick={clickHandler} className={classes.cover}></div>
        )}
        {props.children}
      </button>
    </li>
  );
};

export default Coin;
