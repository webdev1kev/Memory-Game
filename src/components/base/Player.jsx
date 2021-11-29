import { useContext } from "react";
import { GameContext } from "../../context/gameState";

import classes from "./Player.module.css";

import Card from "../Card";

const Player = (props) => {
  const activeClass = props.active ? classes.active : "";

  const gameState = useContext(GameContext).gameState;

  return (
    <Card className={`${classes["player"]} ${props.className} ${activeClass}`}>
      <p className={classes["player-number"]}>Player 1</p>
      <p className={classes["player-score"]}>
        {gameState.scoreForPlayer[props.player]}
      </p>
      {activeClass && <p className={classes["current-turn"]}>CURRENT TURN</p>}
    </Card>
  );
};

export default Player;
