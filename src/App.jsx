import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import GamePage from "./pages/GamePage";
import HomePage from "./pages/HomePage";
import SummaryModal from "./components/frames/SummaryModal";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="game" element={<GamePage />} />
    </Routes>
  );
};

export default App;
