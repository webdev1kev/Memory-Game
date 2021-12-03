import { createContext, useState, useEffect } from "react";
import generateGrid from "../helpers/generateGrid";

const initialState = {
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
  currentTheme: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  numOfPlayers: 1,
  gridSize: "4X4",
  currentPlayer: 0,
  currentGameGrid: [],
  players: [],
  totalPairsLeft: 0,
  isSinglePlayer: true,
  reset: false,
  moves: 0,
  timestamp: "",
};

export const GameContext = createContext({});

export default (props) => {
  const [gameState, setGameState] = useState({ ...initialState });

  //MENU ACTIONS

  const setTheme = (theme) => {
    setGameState((state) => {
      const themeChosen = state.themes[theme];
      return { ...state, currentTheme: themeChosen };
    });
  };

  const setNumberOfPlayers = (number) => {
    setGameState((state) => {
      if (number > 1) {
        state.isSinglePlayer = false;
      }
      return { ...state, numOfPlayers: number };
    });
  };

  const setGridSize = (grid) => {
    setGameState((state) => ({ ...state, gridSize: grid }));
  };

  //GAME ACTIONS

  const createPlayers = () => {
    setGameState((state) => {
      const players = [];
      for (let i = 0; i <= state.numOfPlayers - 1; i++) {
        players.push({ score: 0, number: i + 1 });
      }

      return { ...state, players };
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
      if (state.currentPlayer + 1 === state.numOfPlayers) {
        state.currentPlayer = 0;
        return { ...state };
      }

      state.currentPlayer = state.currentPlayer + 1;
      return { ...state };
    });
  };

  const reducePairsLeft = () => {
    setGameState((state) => {
      const pairsLeft = state.totalPairsLeft - 1;
      return { ...state, totalPairsLeft: pairsLeft };
    });
  };

  const updatePlayerScore = () => {
    setGameState((state) => {
      const currentPlayer = state.currentPlayer;
      state.players[currentPlayer].score =
        state.players[currentPlayer].score + 1;
      return { ...state };
    });
  };

  const updateMovesCounter = () => {
    setGameState((state) => {
      state.moves = state.moves + 1;
      return { ...state };
    });
  };

  const setTimestamp = (time) => {
    setGameState((state) => ({ ...state, timestamp: time }));
  };

  const startGame = () => {
    createPlayers();
    loadGameGrid();
  };

  const restartGame = () => {
    setGameState((state) => {
      state.reset = true;
      state.moves = 0;
      state.players.forEach((player) => {
        player.score = 0;
      });
      state.currentPlayer = 0;
      state.timestamp = "";
      return { ...state };
    });
    createPlayers();
    loadGameGrid();
  };

  const newGame = () => {
    setGameState({ ...initialState });
  };

  useEffect(() => {
    if (gameState.reset) {
      setGameState((state) => ({ ...state, reset: false }));
    }
  }, [gameState.reset]);

  return (
    <GameContext.Provider
      value={{
        gameState,
        menuActions: {
          setTheme,
          setNumberOfPlayers,
          setGridSize,
          startGame,
        },
        gameActions: {
          nextPlayer,
          updatePlayerScore,
          restartGame,
          newGame,
          updateMovesCounter,
          setTimestamp,
          reducePairsLeft,
        },
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
