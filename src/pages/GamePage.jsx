import { Fragment, useContext, useState } from "react";

import { GameContext } from "../context/gameState";
import { useNavigate, Route, Routes, Navigate } from "react-router-dom";

import classes from "./GamePage.module.css";

import logo from "./../assets/logo-black.svg";
import Button from "./../components/base/Button";
import Grid from "../components/frames/Grids";

import Player from "../components/base/Player";
import Timer from "../components/base/Timer";
import MoveCounter from "../components/base/MoveCounter";
import { SummaryModal, MobileMenuModal } from "../components/frames/Modal";

const GamePage = () => {
  const navigate = useNavigate();
  const gameState = useContext(GameContext).gameState;
  const gameActions = useContext(GameContext).gameActions;
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const playerList = gameState.players.map((player, i) => {
    return (
      <Player
        key={i}
        score={player.score}
        number={player.number}
        active={gameState.currentPlayer + 1 === player.number}
      />
    );
  });

  return (
    <Fragment>
      <Routes>
        {!gameState.gameStarted && (
          <Route path="" element={<Navigate to="/" />} />
        )}
      </Routes>
      {mobileMenuActive && (
        <MobileMenuModal
          onClick={() => {
            setMobileMenuActive(false);
          }}
        />
      )}
      {gameState.totalPairsLeft === 0 && gameState.gameStarted && (
        <SummaryModal />
      )}
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
              <Button
                size={"medium"}
                color={"secondary-blue"}
                onClick={() => {
                  gameActions.newGame();

                  navigate("/");
                }}
              >
                New Game
              </Button>
            </div>
            <Button
              size="medium"
              color="primary-orange"
              className={classes["mobile-menu-button"]}
              onClick={() => {
                setMobileMenuActive(true);
              }}
            >
              Menu
            </Button>
          </nav>
          <div className={classes["coin-container"]}>
            <Grid
              gridSize={gameState.gridSize}
              grid={gameState.currentGameGrid}
            />
          </div>

          {!gameState.isSinglePlayer && (
            <div className={classes["player-container"]}>{playerList}</div>
          )}

          {gameState.isSinglePlayer && (
            <div className={classes["player-container"]}>
              <Timer />
              <MoveCounter moves={gameState.moves} />
            </div>
          )}
        </section>
      </main>
    </Fragment>
  );
};

export default GamePage;
