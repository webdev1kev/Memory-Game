import { useContext } from "react";

import classes from "./MoveCounter.module.css";

import ComponentCard from "../ComponentCard";

const MoveCounter = (props) => {
  return (
    <ComponentCard className={classes.moves}>
      <p>Moves</p>
      <p></p>
    </ComponentCard>
  );
};

export default MoveCounter;
