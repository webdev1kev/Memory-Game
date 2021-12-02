import classes from "./Player.module.css";

import ComponentCard from "../ComponentCard";

const Player = (props) => {
  const activeClass = props.active ? classes.active : "";

  return (
    <ComponentCard
      className={`${classes["player"]} ${props.className} ${activeClass}`}
    >
      <p className={classes["player-number"]}>Player {`${props.number}`}</p>
      <p className={classes["player-score"]}>{props.score}</p>
      {activeClass && <p className={classes["current-turn"]}>CURRENT TURN</p>}
    </ComponentCard>
  );
};

export default Player;
