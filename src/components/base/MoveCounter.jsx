import classes from "./MoveCounter.module.css";

import Card from "../Card";

const MoveCounter = (props) => {
  return (
    <Card className={props.ClassName}>
      <p>Moves</p>
      <p>5</p>
    </Card>
  );
};

export default MoveCounter;
