import Coin from "./../base/Coin";

import classes from "./Grid4.module.css";

const Grid4 = (props) => {
  let coins = [];

  for (let i = 1; i <= 16; i++) {
    coins.push(<Coin size="big" />);
  }
  return <ul className={`${classes.grid} ${props.className}`}>{coins}</ul>;
};

export default Grid4;
