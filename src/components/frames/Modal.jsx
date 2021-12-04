import classes from "./Modal.module.css";
import { useContext, Fragment } from "react";
import { useNavigate } from "react-router";
import { createPortal } from "react-dom";

import ResultsList from "./ResultsList";
import Button from "../base/Button";
import { GameContext } from "../../context/gameState";
import endGameResults from "../../helpers/endGameResults";

const modal = document.getElementById("modal");
const backdrop = document.getElementById("backdrop");

const Backdrop = () => {
  return createPortal(<div className={classes.backdrop}></div>, backdrop);
};

const Summary = (props) => {
  const gameState = useContext(GameContext).gameState;
  const gameActions = useContext(GameContext).gameActions;

  const navigate = useNavigate();

  const players = [...gameState.players];
  const results = endGameResults(players);
  const singlePlayerResults = {
    moves: gameState.moves,
    time: gameState.timestamp,
  };

  const multiplayerHeading = results.tied
    ? "It's a tie!"
    : `Player ${results.scoreList[0].number} won!`;

  return createPortal(
    <div className={classes["modal-container"]}>
      <div className={classes["modal-card"]}>
        {!gameState.isSinglePlayer && <h1>{multiplayerHeading}</h1>}
        {gameState.isSinglePlayer && <h1>You did it!</h1>}
        <p>Game over! Here are the results...</p>
        <ResultsList
          scoreList={results.scoreList}
          isSinglePlayer={gameState.isSinglePlayer}
          singlePlayerResults={singlePlayerResults}
        />

        <Button
          size="big"
          color="primary-orange"
          onClick={() => {
            gameActions.restartGame();
          }}
        >
          Restart
        </Button>
        <Button
          size="big"
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

const MobileMenu = (props) => {
  const gameActions = useContext(GameContext).gameActions;

  return createPortal(
    <div className={`${classes["modal-container"]} ${props.className}`}>
      <div className={`${classes["modal-card"]} ${classes["mobile-menu"]}`}>
        <Button
          size="big"
          color="primary-orange"
          onClick={() => {
            gameActions.restartGame();
          }}
        >
          Restart
        </Button>
        <Button
          size="big"
          color="secondary-blue"
          onClick={() => {
            gameActions.newGame();
          }}
        >
          New Game
        </Button>
        <Button size="big" color="secondary-blue" onClick={props.onClick}>
          Resume Game
        </Button>
      </div>
    </div>,
    modal
  );
};

export const SummaryModal = () => {
  return (
    <Fragment>
      <Backdrop />
      <Summary />
    </Fragment>
  );
};

export const MobileMenuModal = (props) => {
  return (
    <Fragment>
      <Backdrop />
      <MobileMenu onClick={props.onClick} />
    </Fragment>
  );
};
