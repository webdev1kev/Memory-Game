import classes from "./Player.module.css";

const Player = (props) => {
  return (
    <div className={classes.player}>
      <p className={classes["player-number"]}>Player 1</p>
      <p className={classes["player-score"]}>5</p>
      <p className={classes["current-turn"]}>CURRENT TURN</p>
    </div>
  );
};

export default Player;
