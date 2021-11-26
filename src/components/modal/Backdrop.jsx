import { createPortal } from "react-dom";

import classes from "./Backdrop.module.css";

const modal = document.getElementById("modal");

const Backdrop = (props) => {
  return createPortal(
    <div className={classes.backdrop}>{props.children}</div>,
    modal
  );
};

export default Backdrop;
