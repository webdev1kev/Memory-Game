import { Fragment } from "react";
import classes from "./ResultsList.module.css";

import ComponentCard from "../ComponentCard";

const SinglePlayerList = (props) => {
  return (
    <Fragment>
      <li>
        <ComponentCard className={`${classes.card}`}>
          <p>Time Elapsed</p>
          <p>{props.time}</p>
        </ComponentCard>
      </li>
      <li>
        <ComponentCard className={`${classes.card}`}>
          <p>Moves Taken</p>
          <p>{props.moves}</p>
        </ComponentCard>
      </li>
    </Fragment>
  );
};

const List = (props) => {
  const moves = props.singlePlayerResults.moves;
  const time = props.singlePlayerResults.time;

  const multiplayerResultsList = props.scoreList.map((player, i) => {
    return (
      <li>
        <ComponentCard
          className={`${classes.card} ${player.won ? classes.winner : ""}`}
        >
          <p>
            Player {player.number} {player.won ? "(winner)" : ""}
          </p>
          <p>{player.score}</p>
        </ComponentCard>
      </li>
    );
  });

  return (
    <ul className={`${classes.list} ${props.className}`}>
      {!props.isSinglePlayer && multiplayerResultsList}
      {props.isSinglePlayer && <SinglePlayerList moves={moves} time={time} />}
    </ul>
  );
};

export default List;
