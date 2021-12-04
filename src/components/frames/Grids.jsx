import Coin from "../base/Coin";

import classes1 from "./Grid4.module.css";
import classes2 from "./Grid6.module.css";

import showIcon from "../../helpers/showIcon";

const Grid = (props) => {
  const coinSize = props.gridSize === "4X4" ? "big" : "";
  return (
    <ul className={props.gridSize === "4X4" ? classes1.grid : classes2.grid}>
      {props.grid.map((coin, i) => {
        if (typeof coin === "number") {
          return (
            <Coin key={i} size={coinSize} name={coin}>
              {coin}
            </Coin>
          );
        }

        return (
          <Coin
            key={i}
            icon={showIcon(coin)}
            size={coinSize}
            name={coin}
          ></Coin>
        );
      })}
    </ul>
  );
};

export default Grid;
