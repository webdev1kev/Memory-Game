import classes from "./Modal.module.css";
import { useContext, Fragment } from "react";
import { useNavigate } from "react-router";
import { createPortal } from "react-dom";

import List from "../base/List";
import Button from "../base/Button";
import { GameContext } from "../../context/gameState";

const modal = document.getElementById("modal");
const backdrop = document.getElementById("backdrop");

const Backdrop = () => {
  return createPortal(<div className={classes.backdrop}></div>, backdrop);
};

const Modal = (props) => {
  const gameActions = useContext(GameContext).gameActions;
  const gameState = useContext(GameContext).gameState;

  const navigate = useNavigate();

  return createPortal(
    <div className={classes["modal-container"]}>
      <div className={classes["modal-card"]}>
        <h1>Player 1 Wins!</h1>
        <p>Game over! Here are the results...</p>
        <List players={gameState.players} />
        <Button
          size="medium"
          color="primary-orange"
          onClick={() => {
            gameActions.restartGame();
          }}
        >
          Restart
        </Button>
        <Button
          size="medium"
          color="secondary-blue"
          onClick={() => {
            navigate("/");
            gameActions.newGame();
          }}
        >
          Setup New Game
        </Button>
      </div>
    </div>,
    modal
  );
};

const SummaryModal = () => {
  return (
    <Fragment>
      <Backdrop />
      <Modal />
    </Fragment>
  );
};

export default SummaryModal;
