import classes from "./Player.module.css";

import Card from "./../Card";

const Player = (props) => {
  return (
    <Card className={`${classes["player"]} ${props.className}`}>
      <p className={classes["player-number"]}>Player 1</p>
      <p className={classes["player-score"]}>5</p>
      <p className={classes["current-turn"]}>CURRENT TURN</p>
    </Card>
  );
};

export default Player;
