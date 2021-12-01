import { createContext, useState } from "react";
import generateGrid from "../helpers/generateGrid";

export const GameContext = createContext({});

export default (props) => {
  const [gameState, setGameState] = useState({
    themes: {
      Numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      Symbols: [
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
      ],
    },
    currentTheme: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    ],
    numOfPlayers: 1,
    gridSize: "4X4",
    currentPlayer: 1,
    currentGameGrid: [],
    scoreOfPlayer: { 1: 0, 2: 0, 3: 0, 4: 0 },
    totalPairsLeft: 0,
  });

  const setTheme = (theme) => {
    setGameState((state) => {
      state.currentTheme = state.themes[theme];
      return { ...state };
    });
  };

  const setNumberOfPlayers = (number) => {
    setGameState((state) => {
      state.numOfPlayers = number;
      return { ...state };
    });
  };

  const setGridSize = (grid) => {
    setGameState((state) => {
      state.gridSize = grid;
      return { ...state };
    });
  };

  const loadGameGrid = () => {
    setGameState((state) => {
      const gridTheme = state.currentTheme;
      const gridSize = state.gridSize === "4X4" ? 8 : 18;
      state.totalPairsLeft = gridSize;
      state.currentGameGrid = generateGrid(gridTheme, gridSize);
      return { ...state };
    });
  };

  const nextPlayer = () => {
    setGameState((state) => {
      if (state.currentPlayer === state.numOfPlayers) {
        state.currentPlayer = 1;
        return { ...state };
      }

      state.currentPlayer = state.currentPlayer + 1;
      return { ...state };
    });
  };

  const updatePlayerScore = () => {
    setGameState((state) => {
      const currentPlayer = state.currentPlayer;
      state.totalPairsLeft = state.totalPairsLeft - 1;
      state.scoreOfPlayer[currentPlayer] =
        state.scoreOfPlayer[currentPlayer] + 1;

      return { ...state };
    });
  };

  const resetMenu = () => {
    setGameState(gameState);
  };

  const restartGame = () => {
    loadGameGrid();
  }

  return (
    <GameContext.Provider
      value={{
        gameState,
        menuActions: {
          setTheme,
          setNumberOfPlayers,
          setGridSize,
          loadGameGrid,
        },
        gameActions: {
          nextPlayer,
          resetMenu,
          updatePlayerScore,
          restartGame,
        },
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
