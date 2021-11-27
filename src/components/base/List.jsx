import classes from "./List.module.css";

import ComponentCard from "./../Card";

const List = (props) => {
  return (
    <ul className={`${classes.list} ${props.className}`}>
      <li>
        <ComponentCard>
          <p>Player</p>
          <p>3</p>
        </ComponentCard>
      </li>
      <li>
        <ComponentCard>
          <p>Player</p>
          <p>3</p>
        </ComponentCard>
      </li>
      <li>
        <ComponentCard>
          <p>Player</p>
          <p>3</p>
        </ComponentCard>
      </li>
      <li>
        <ComponentCard>
          <p>Player</p>
          <p>3</p>
        </ComponentCard>
      </li>
    </ul>
  );
};

export default List;
