import classes from "./SummaryModal.module.css";

import Backdrop from "./Backdrop";
import List from "../UI/List";
import Button from "../Button";

const SummaryModal = () => {
  return (
    <Backdrop>
      <div className={classes["modal-card"]}>
        <h1>Player 1 Wins!</h1>
        <p>Game over! Here are the results...</p>
        <List />
        <Button size="medium" color="primary-orange">
          Restart
        </Button>
        <Button size="medium" color="secondary-blue">
          Setup New Game
        </Button>
      </div>
    </Backdrop>
  );
};

export default SummaryModal;
