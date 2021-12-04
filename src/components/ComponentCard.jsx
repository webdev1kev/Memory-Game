import classes from "./ComponentCard.module.css";

const ComponentCard = (props) => {
  return (
    <div
      className={`${props.className} ${classes.card} ${
        classes[props.className]
      }`}
    >
      {props.children}
    </div>
  );
};

export default ComponentCard;
