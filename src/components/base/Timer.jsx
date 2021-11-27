import classes from "./Timer.module.css";

import Card from "./../Card";

const Timer = (props) => {
  return (
    <Card className={props.className}>
      <p>Time</p>
      <p>11:00</p>
    </Card>
  );
};

export default Timer;
