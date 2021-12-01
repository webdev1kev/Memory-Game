import { useContext } from "react";

import { GameContext } from "../context/gameState";

import classes from "./GamePage.module.css";

import logo from "./../assets/logo-black.svg";
import Button from "./../components/base/Button";
import Grid from "../components/frames/Grids";

import Player from "../components/base/Player";
import Timer from "../components/base/Timer";
import MoveCounter from "../components/base/MoveCounter";

const GamePage = () => {
  const gameState = useContext(GameContext).gameState;
  const gameActions = useContext(GameContext).gameActions;

  const players = [];

  for (let i = 1; i <= gameState.numOfPlayers; i++) {
    const playerScore = gameState.scoreOfPlayer[i];

    players.push(
      <Player
        player={i}
        key={i}
        score={playerScore}
        active={gameState.currentPlayer === i}
      />
    );
  }

  return (
    <main className={classes.gamepage}>
      <section className={classes.grid}>
        <nav className={classes.navbar}>
          <div className={classes["logo-frame"]}>
            <img src={logo} alt="MemoryLogo" />
          </div>

          <div className={classes["button-container"]}>
            <Button
              size={"medium"}
              color={"primary-orange"}
              onClick={() => {
                gameActions.restartGame();
              }}
            >
              Restart
            </Button>
            <Button size={"medium"} color={"secondary-blue"} onClick={() => {}}>
              New Game
            </Button>
          </div>
        </nav>
        <div className={classes["coin-container"]}>
          <Grid
            gridSize={gameState.gridSize}
            grid={gameState.currentGameGrid}
          />
        </div>

        {/* <div className={classes["player-container"]}>{players}</div> */}

        <div className={classes["player-container"]}>
          <Timer />
          <MoveCounter />
        </div>
      </section>
    </main>
  );
};

export default GamePage;
