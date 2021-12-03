import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import GamePage from "./pages/GamePage";
import HomePage from "./pages/HomePage";

import GameContextProvider from "./context/gameState";

const App = () => {
  return (
    <GameContextProvider>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="game/*" element={<GamePage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </GameContextProvider>
  );
};

export default App;
