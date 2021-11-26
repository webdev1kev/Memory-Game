import { Fragment } from "react";

import Coin from "./components/Coin";
import Button from "./components/Button";
import Player from "./components/Player";
import Timer from "./components/Timer";
import MoveCounter from "./components/MoveCounter";
import SummaryModal from "./components/modals/SummaryModal";

const App = () => {
  return (
    <Fragment>
      <SummaryModal />
    </Fragment>
  );
};

export default App;
