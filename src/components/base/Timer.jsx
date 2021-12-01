import { useState, useEffect, useContext, useLayoutEffect } from "react";

import classes from "./Timer.module.css";

import ComponentCard from "../ComponentCard";

const Timer = (props) => {
  const [timer, setTimer] = useState({ seconds: 0, minutes: 0, hours: 0 });

  const time = `${timer.hours > 0 ? `${timer.hours}:` : ""}${
    timer.minutes < 10 && timer.hours > 0 ? "0" : ""
  }${timer.minutes}:${timer.seconds < 10 ? "0" : ""}${timer.seconds}`;

  useEffect(() => {
    const timeoutID = setTimeout(() => {
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

    return () => {
      clearTimeout(timeoutID);
    };
  }, [timer]);

  return (
    <ComponentCard className={classes.timer}>
      <p>Time</p>
      <p>{time}</p>
    </ComponentCard>
  );
};

export default Timer;
