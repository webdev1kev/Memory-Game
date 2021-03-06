import { useState, useEffect, useContext } from "react";

import { GameContext } from "./../../context/gameState";
import classes from "./Timer.module.css";

import ComponentCard from "../ComponentCard";

const Timer = () => {
  const gameState = useContext(GameContext).gameState;
  const gameActions = useContext(GameContext).gameActions;
  const [timer, setTimer] = useState({ seconds: 0, minutes: 0, hours: 0 });
  const [timestamped, setTimestamped] = useState(false);

  const time = `${timer.hours > 0 ? `${timer.hours}:` : ""}${
    timer.minutes < 10 && timer.hours > 0 ? "0" : ""
  }${timer.minutes}:${timer.seconds < 10 ? "0" : ""}${timer.seconds}`;

  if (gameState.totalPairsLeft === 0 && gameState.gameStarted && !timestamped) {
    gameActions.setTimestamp(time);
    setTimestamped(true);
  }

  useEffect(() => {
    const timeoutID = setInterval(() => {
      if (timer.minutes === 59 && timer.seconds === 59) {
        timer.seconds = 0;
        timer.minutes = 0;
        timer.hours = timer.hours + 1;
        return setTimer({ ...timer });
      }

      if (timer.seconds === 59) {
        timer.minutes = timer.minutes + 1;
        timer.seconds = 0;
        return setTimer({ ...timer });
      }

      timer.seconds = timer.seconds + 1;
      setTimer({ ...timer });
    }, 1000);

    if (gameState.reset) {
      setTimer({ seconds: 0, minutes: 0, hours: 0 });
      setTimestamped(false);
    }

    return () => {
      clearInterval(timeoutID);
    };
  }, [timer, gameState.reset]);

  return (
    <ComponentCard className={classes.timer}>
      <p>Time</p>
      <p>{time}</p>
    </ComponentCard>
  );
};

export default Timer;
