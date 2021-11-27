import classes from "./HomeMenu.module.css";

import Card from "../Card";
import Button from "./../base/Button";

const HomeMenu = (props) => {
  return (
    <Card className={`${props.className} ${classes.grid}`}>
      <p>Select Theme</p>
      <Button
        className={classes["theme-button"]}
        size="medium"
        color="secondary-blue"
      >
        Numbers
      </Button>
      <Button
        className={classes["theme-button"]}
        size="medium"
        color="secondary-blue"
      >
        Icons
      </Button>
      <p>Number of Players</p>
      <Button
        className={classes["player-button"]}
        size="medium"
        color="secondary-blue"
      >
        1
      </Button>
      <Button
        className={classes["player-button"]}
        size="medium"
        color="secondary-blue"
      >
        2
      </Button>
      <Button
        className={classes["player-button"]}
        size="medium"
        color="secondary-blue"
      >
        3
      </Button>
      <Button
        className={classes["player-button"]}
        size="medium"
        color="secondary-blue"
      >
        4
      </Button>
      <p>Grid Size</p>
      <Button
        className={classes["grid-button"]}
        size="medium"
        color="secondary-blue"
      >
        4 X 4
      </Button>
      <Button
        className={classes["grid-button"]}
        size="medium"
        color="secondary-blue"
      >
        6 X 6
      </Button>
      <Button
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
