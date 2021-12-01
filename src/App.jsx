import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import GamePage from "./pages/GamePage";
import HomePage from "./pages/HomePage";

import GameContextProvider from "./context/gameState";

const App = () => {
  return (
    <GameContextProvider>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="game" element={<GamePage />} />
      </Routes>
    </GameContextProvider>
  );
};

export default App;
