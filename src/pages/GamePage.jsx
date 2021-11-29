import { useContext } from "react";

import classes from "./GamePage.module.css";

import logo from "./../assets/logo-black.svg";
import Button from "./../components/base/Button";
import Grid from "../components/frames/Grids";

import Player from "../components/base/Player";

import { GameContext } from "../context/gameState";

const GamePage = () => {
  const gameState = useContext(GameContext).gameState;

  console.log(gameState);

  return (
    <main className={classes.gamepage}>
      <section className={classes.grid}>
        <nav className={classes.navbar}>
          <div className={classes["logo-frame"]}>
            <img src={logo} alt="MemoryLogo" />
          </div>

          <div className={classes["button-container"]}>
            <Button size={"medium"} color={"primary-orange"}>
              Restart
            </Button>
            <Button size={"medium"} color={"secondary-blue"}>
              New Game
            </Button>
          </div>
        </nav>
        <div className={classes["coin-container"]}>
          <Grid gridSize={gameState.gridSize} />
        </div>
        <div className={classes["player-container"]}>
          <Player active={gameState.currentPlayer === 1} player={1} />
          <Player active={gameState.currentPlayer === 2} player={2} />
          <Player active={gameState.currentPlayer === 3} player={3} />
          <Player active={gameState.currentPlayer === 4} player={4} />
        </div>
      </section>
    </main>
  );
};

export default GamePage;
