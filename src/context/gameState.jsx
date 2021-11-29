import { createContext, useState } from "react";
import generateRandomPairsArray from "../helpers/generateRandomPairsArray";

const icons = [
  "bug",
  "car",
  "flask",
  "futbol",
  "hand-spock",
  "lira-sign",
  "moon",
  "snowflake",
  "sun",
  "anchor",
];

export const GameContext = createContext({
  gameState: {
    currentPlayer: 0,
    pairsFound: 0,
    current4x4Grid: [],
    current6x6Grid: [],
    scoreForPlayer: { 1: 0, 2: 0, 3: 0, 4: 0 },
    winner: "",
    setTheme: (theme) => {},
    setPlayers: (players) => {},
    setGridSize: (size) => {},
    setGameStarted: () => {},
    nextPlayer: () => {},
    increasePairsFound: () => {},
    updatePlayerScore: () => {},
    resetGameState: () => {},
  },
});

export default (props) => {
  const [gameState, setGameState] = useState({
    theme: "Numbers",
    numberOfPlayers: 1,
    gridSize: "4X4",
    gameStarted: false,
    currentPlayer: 1,
    current4x4Grid: generateRandomPairsArray(icons, 8),
    current6x6Grid: generateRandomPairsArray(icons, 18),
    pairsFound: 0,
    scoreForPlayer: { 1: 0, 2: 0, 3: 0, 4: 0 },
    winner: "",
  });

  const setTheme = (theme) => {
    setGameState((state) => {
      state.theme = theme;
      return { ...state };
    });
  };

  const setPlayers = (numberOfPlayers) => {
    setGameState((state) => {
      state.numberOfPlayers = numberOfPlayers;
      return { ...state };
    });
  };

  const setGridSize = (gridSize) => {
    setGameState((state) => {
      state.gridSize = gridSize;
      return { ...state };
    });
  };

  const setGameStarted = () => {
    setGameState((state) => {
      state.gameStarted = !state.gameStarted;
      return { ...state };
    });
  };

  const nextPlayer = () => {
    setGameState((state) => {
      state.currentPlayer = state.currentPlayer++;
      return { ...state };
    });
  };

  const increasePairsFound = () => {
    setGameState((state) => {
      state.pairsFound = state.pairsFound++;
      return { ...state };
    });
  };

  const updatePlayerScore = () => {
    setGameState((state) => {
      state.scoreForPlayer[state.currentPlayer] =
        state.scoreForPlayer[state.currentPlayer] + 1;
      return { ...state };
    });
  };

  const resetGameState = () => {
    setGameState({
      currentPlayer: 1,
      pairsFound: 0,
      scoreForPlayer: { 1: 0, 2: 0, 3: 0, 4: 0 },
      winner: "",
    });
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        setTheme,
        setPlayers,
        setGridSize,
        setGameStarted,
        nextPlayer,
        increasePairsFound,
        updatePlayerScore,
        resetGameState,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
