import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../../context/gameState";

import classes from "./HomeMenu.module.css";

import Button from "./../base/Button";
import ButtonGroup from "./ButtonGroup";

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

const HomeMenu = () => {
  let navigate = useNavigate();
  const gameState = useContext(GameContext).gameState;
  const menuActions = useContext(GameContext).menuActions;

  console.log(gameState);

  const themeButtons = buttonGenerator(
    ["Numbers", "Symbols"],
    menuActions.setTheme
  );
  const playerButtons = buttonGenerator(
    [1, 2, 3, 4],
    menuActions.setNumberOfPlayers
  );
  const gridSizeButtons = buttonGenerator(
    ["4X4", "6X6"],
    menuActions.setGridSize
  );

  return (
    <div className={classes.grid}>
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
          menuActions.startGame();
          navigate("/game", { replace: true });
        }}
        className={classes["start-button"]}
        size="big"
        color="primary-orange"
      >
        Start Game
      </Button>
    </div>
  );
};

export default HomeMenu;
