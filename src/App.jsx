import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import GamePage from "./pages/GamePage";
import HomePage from "./pages/HomePage";
import SummaryModal from "./components/frames/SummaryModal";
import GameContextProvider from "./context/gameState";

const App = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <GameContextProvider>
            <HomePage />
          </GameContextProvider>
        }
      />
      <Route
        path="game"
        element={
          <GameContextProvider>
            <GamePage />
          </GameContextProvider>
        }
      />
    </Routes>
  );
};

export default App;
