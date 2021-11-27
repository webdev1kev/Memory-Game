import classes from "./SummaryModal.module.css";

import Card from "./../Card";

import Backdrop from "./Backdrop";
import List from "./../base/List";
import Button from "./../base/Button";

const SummaryModal = () => {
  return (
    <Backdrop>
      <Card className={classes["modal-card"]}>
        <h1>Player 1 Wins!</h1>
        <p>Game over! Here are the results...</p>
        <List />
        <Button size="medium" color="primary-orange">
          Restart
        </Button>
        <Button size="medium" color="secondary-blue">
          Setup New Game
        </Button>
      </Card>
    </Backdrop>
  );
};

export default SummaryModal;
