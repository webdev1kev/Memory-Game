import Coin from "./../base/Coin";

import classes from "./Grid6.module.css";

const Grid6 = (props) => {
  let coins = [];

  for (let i = 1; i <= 36; i++) {
    coins.push(<Coin />);
  }
  return <ul className={`${classes.grid} ${props.className}`}>{coins}</ul>;
};

export default Grid6;
