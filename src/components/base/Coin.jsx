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
    coin1.matched(true);
    coin2.matched(true);
    selectedCoins.splice(0);
    return true;
  }

  setTimeout(() => {
    coin1.clicked(false);
    coin2.clicked(false);
  }, 1000);

  selectedCoins.splice(0);
  return false;
};

const Coin = (props) => {
  const [clicked, setClicked] = useState(false);
  const [matched, setMatched] = useState(false);

  const updatePlayerScore = useContext(GameContext).updatePlayerScore;

  const matchedClass = matched ? classes.matched : "";

  const sizeClass = props.size;

  const clickHandler = () => {
    selectedCoins.push({
      name: props.name,
      clicked: setClicked,
      matched: setMatched,
    });
    setClicked(true);

    if (selectedCoins.length === 2) {
      const isMatch = compareCoins(selectedCoins);
      if (isMatch) {
        updatePlayerScore();
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
