import { useState } from "react";
import classes from "./CoinCover.module.css";

const CoinCover = (props) => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(true);
    props.onClick();
  };

  return (
    !clicked && <div onClick={clickHandler} className={classes.cover}></div>
  );
};

export default CoinCover;
