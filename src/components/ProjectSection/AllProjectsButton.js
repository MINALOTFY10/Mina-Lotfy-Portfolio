import { NavLink } from "react-router-dom";
import classes from "./AllProjectsButton.module.css";
import logo from "../../assets/img/next-svg.svg";

const AllProjectsButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  };

  return (
    <NavLink
      to="/Projects"
      className={`${classes.postcard} dark blue`}
      onClick={scrollToTop}
    >
      <div className={classes["postcard__text"]}>
        <h1 className={`${classes["postcard__title"]} blue`}>
          <a href="#">All Projects</a>
        </h1>
        <div className={classes["postcard__bar"]}></div>
      </div>
      <div className={classes["postcard__img_link"]}>
        <img
          className={classes["postcard__img"]}
          src={logo}
          alt="Image Title"
        />
      </div>
    </NavLink>
  );
};

export default AllProjectsButton;
