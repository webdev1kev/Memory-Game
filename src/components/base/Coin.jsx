import { useState, useContext } from "react";

import { GameContext } from "../../context/gameState";

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

const selectedCoins = [];

const compareCoins = (coinsArray) => {
  const [coin1, coin2] = coinsArray;

  if (coin1.name === coin2.name) {
    coin1.setMatched(true);
    coin2.setMatched(true);
    selectedCoins.splice(0);
    return true;
  }

  setTimeout(() => {
    coin1.setClicked(false);
    coin2.setClicked(false);
    selectedCoins.splice(0);
  }, 700);

  return false;
};

const Coin = (props) => {
  const gameActions = useContext(GameContext).gameActions;
  const gameState = useContext(GameContext).gameState;
  const [clicked, setClicked] = useState(false);
  const [matched, setMatched] = useState(false);

  const sizeClass = props.size;
  const matchedClass = matched ? classes.matched : "";

  const clickHandler = () => {
    setClicked(true);
    selectedCoins.push({ name: props.name, setClicked, setMatched });

    if (selectedCoins.length === 2) {
      if (gameState.isSinglePlayer) {
      }

      if (compareCoins(selectedCoins) && !gameState.isSinglePlayer) {
        gameActions.updatePlayerScore();
      } else {
        gameActions.nextPlayer();
      }
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
