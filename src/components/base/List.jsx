import classes from "./List.module.css";

import Card from "./../Card";

const List = (props) => {
  return (
    <ul className={`${classes.list} ${props.className}`}>
      <li>
        <Card>
          <p>Player</p>
          <p>3</p>
        </Card>
      </li>
      <li>
        <Card>
          <p>Player</p>
          <p>3</p>
        </Card>
      </li>
      <li>
        <Card>
          <p>Player</p>
          <p>3</p>
        </Card>
      </li>
      <li>
        <Card>
          <p>Player</p>
          <p>3</p>
        </Card>
      </li>
    </ul>
  );
};

export default List;
