import { useState, useContext, useEffect } from "react";

import { GameContext } from "../../context/gameState";
import compareCoins from "../../helpers/compareCoins";

import classes from "./Coin.module.css";

export const selectedCoins = [];

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

    selectedCoins.push({
      name: props.name,
      setClicked,
      setMatched,
    });

    if (selectedCoins.length === 2) {
      const isMatch = compareCoins(selectedCoins);
      selectedCoins.splice(0);

      if (gameState.isSinglePlayer) {
        gameActions.updateMovesCounter();

        if (isMatch) {
          gameActions.reducePairsLeft();
        }
        return;
      }

      if (!gameState.isSinglePlayer && isMatch) {
        gameActions.updatePlayerScore();
        gameActions.reducePairsLeft();
        return;
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
