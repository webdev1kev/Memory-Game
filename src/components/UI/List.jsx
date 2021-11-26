import classes from "./List.module.css";

import ComponentCard from "./ComponentCard";

const List = () => {
  return (
    <ul className={classes.list}>
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
