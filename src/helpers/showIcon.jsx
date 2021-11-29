import bugIcon from "./../assets/icons/bug.svg";
import carIcon from "./../assets/icons/car.svg";
import flaskIcon from "./../assets/icons/flask.svg";
import futbolIcon from "./../assets/icons/futbol.svg";
import handSpockIcon from "./../assets/icons/hand-spock.svg";
import liraSignIcon from "./../assets/icons/lira-sign.svg";
import moonIcon from "./../assets/icons/moon.svg";
import snowflakeIcon from "./../assets/icons/snowflake.svg";
import sunIcon from "./../assets/icons/sun.svg";
import anchorIcon from "./../assets/icons/anchor.svg";

const showIcon = (string) => {
  switch (string) {
    case "bug":
      return bugIcon;
    case "car":
      return carIcon;
    case "flask":
      return flaskIcon;
    case "futbol":
      return futbolIcon;
    case "hand-spock":
      return handSpockIcon;
    case "lira-sign":
      return liraSignIcon;
    case "moon":
      return moonIcon;
    case "snowflake":
      return snowflakeIcon;
    case "sun":
      return sunIcon;
    case "anchor":
      return anchorIcon;
  }
};

export default showIcon;
