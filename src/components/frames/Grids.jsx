import { useContext } from "react";
import { GameContext } from "../../context/gameState";

import Coin from "../base/Coin";

import classes1 from "./Grid6.module.css";
import classes2 from "./Grid4.module.css";

import showIcon from "../../helpers/showIcon";

// import bugIcon from "./../../assets/icons/bug.svg";
// import carIcon from "./../../assets/icons/car.svg";
// import flaskIcon from "./../../assets/icons/flask.svg";
// import futbolIcon from "./../../assets/icons/futbol.svg";
// import handSpockIcon from "./../../assets/icons/hand-spock.svg";
// import liraSignIcon from "./../../assets/icons/lira-sign.svg";
// import moonIcon from "./../../assets/icons/moon.svg";
// import snowflakeIcon from "./../../assets/icons/snowflake.svg";
// import sunIcon from "./../../assets/icons/sun.svg";
// import anchorIcon from "./../../assets/icons/anchor.svg";

const icons = [
  "bug",
  "car",
  "flask",
  "futbol",
  "hand-spock",
  "lira-sign",
  "moon",
  "snowflake",
  "sun",
  "anchor",
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

const Grid = (props) => {
  const is4x4 = props.gridSize === "4X4";

  const gameState = useContext(GameContext).gameState;

  const grid = is4x4 ? gameState.current4x4Grid : gameState.current6x6Grid;

  return (
    <ul
      className={`${is4x4 ? classes2.grid : classes1.grid} ${props.className}`}
    >
      {grid.map((iconName, i) => {
        const iconImage = showIcon(iconName);
        return (
          <Coin icon={iconImage} key={i} name={iconName}>
            {typeof iconName === "number" ? iconName : ""}
          </Coin>
        );
      })}
    </ul>
  );
};

export default Grid;

// export const Grid4 = (props) => {
//   const grid = generateRandomPairsArray(numbers, 8);

//   return (
//     <ul className={`${classes2.grid} ${props.className}`}>
//       {grid.map((el, i) => {
//         const iconImage = showIcon(el);
//         return (
//           <Coin icon={iconImage} key={i} name={iconName}>
//             {typeof iconName === "number" ? iconName : ""}
//           </Coin>
//         );
//       })}
//     </ul>
//   );
// };
