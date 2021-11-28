import classes from "./GamePage.module.css";

import logo from "./../assets/logo-black.svg";
import Button from "./../components/base/Button";
import Grid6 from "../components/frames/Grid6";
import Grid4 from "../components/frames/Grid4";
import Player from "../components/base/Player";

const GamePage = () => {
  return (
    <main className={classes.gamepage}>
      <section className={classes.grid}>
        <nav className={classes.navbar}>
          <div className={classes["logo-frame"]}>
            <img src={logo} alt="MemoryLogo" />
          </div>

          <div className={classes["button-container"]}>
            <Button size={"medium"} color={"primary-orange"}>
              Restart
            </Button>
            <Button size={"medium"} color={"secondary-blue"}>
              New Game
            </Button>
          </div>
        </nav>
        <div className={classes["coin-container"]}>
          <Grid6 />
        </div>
        <div className={classes["player-container"]}>
          <Player />
          <Player />
          <Player />
          <Player />
        </div>
      </section>
    </main>
  );
};

export default GamePage;
