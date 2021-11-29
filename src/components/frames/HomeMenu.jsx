import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../../context/gameState";

import classes from "./HomeMenu.module.css";

import Card from "../Card";
import Button from "./../base/Button";
import ButtonGroup from "./../frames/ButtonGroup";

const buttonGenerator = (buttonNamesArray, onClick) => {
  const buttons = [];
  buttonNamesArray.map((name) => {
    buttons.push({
      name,
      onClick,
    });
  });

  return buttons;
};

const HomeMenu = (props) => {
  let navigate = useNavigate();

  const setTheme = useContext(GameContext).setTheme;
  const setPlayers = useContext(GameContext).setPlayers;
  const setGridSize = useContext(GameContext).setGridSize;
  const setGameStarted = useContext(GameContext).setGameStarted;

  const themeButtons = buttonGenerator(["Numbers", "Symbol"], setTheme);
  const playerButtons = buttonGenerator([1, 2, 3, 4], setPlayers);
  const gridSizeButtons = buttonGenerator(["4X4", "6X6"], setGridSize);

  return (
    <Card className={`${props.className} ${classes.grid}`}>
      <p>Select Theme</p>
      <ButtonGroup
        className={classes["theme-buttons"]}
        size="medium"
        color="secondary-blue"
        buttons={themeButtons}
        initial={"Numbers"}
      />
      <p>Number of Players</p>
      <ButtonGroup
        className={classes["player-buttons"]}
        size="medium"
        color="secondary-blue"
        buttons={playerButtons}
        initial={1}
      />
      <p>Grid Size</p>
      <ButtonGroup
        className={classes["grid-buttons"]}
        size="medium"
        color="secondary-blue"
        buttons={gridSizeButtons}
        initial={"4X4"}
      />

      <Button
        onClick={() => {
          setGameStarted();
          navigate("/game");
        }}
        className={classes["start-button"]}
        size="big"
        color="primary-orange"
      >
        Start Game
      </Button>
    </Card>
  );
};

export default HomeMenu;
