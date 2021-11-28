import HomeMenu from "./../components/frames/HomeMenu";
import classes from "./HomePage.module.css";

import logoWhite from "./../assets/logo-white.svg";

const HomePage = () => {
  return (
    <main className={classes.homepage}>
      <section className={classes.grid}>
        <div className={classes["homemenu-container"]}>
          <div className={classes["logo-frame"]}>
            <img src={logoWhite} alt="Memory Logo" />
          </div>
          <HomeMenu className={classes.menu} />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
