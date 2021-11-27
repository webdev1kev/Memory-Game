import HomeMenu from "./../components/frames/HomeMenu";
import classes from "./HomePage.module.css";

import logoWhite from "./../assets/logo-white.svg";

const HomePage = () => {
  return (
    <main className={classes.homepage}>
      <section className={classes.grid}>
        <img src={logoWhite} alt="Memory Logo" />
        <HomeMenu className={classes.menu} />
      </section>
    </main>
  );
};

export default HomePage;
