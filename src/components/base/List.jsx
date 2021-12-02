import classes from "./List.module.css";

import ComponentCard from "./../ComponentCard";
import endGameResults from "../../helpers/endGameResults";

const List = (props) => {
  const results = endGameResults(props.players);

  console.log(results);

  return <ul className={`${classes.list} ${props.className}`}></ul>;
};

export default List;
