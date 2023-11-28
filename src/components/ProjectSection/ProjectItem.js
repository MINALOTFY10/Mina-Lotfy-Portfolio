import classes from "./ProjectItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faClock,
  faPlay,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProjectItem = ({ project }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional: Enables smooth scrolling
    });
  };


  return (
    <Link to={`/Projects/${project.id}`} onClick={scrollToTop}>
      <article id={project.id} class={`${classes.postcard} dark blue`}>
        <div class={classes["postcard__img_link"]}>
          <img
            class={classes["postcard__img"]}
            src={project.images[0]}
            alt="Image Title"
          />
        </div>
        <div class={classes["postcard__text"]}>
          <h1 class={`${classes["postcard__title"]} blue`}>
            <a href="#">{project.title}</a>
          </h1>
          <div class={`${classes["postcard__subtitle"]} small`}>
            <time datetime="2020-05-25 12:00:00">
              <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
              {project.date}
            </time>
          </div>
          <div class={classes["postcard__bar"]}></div>
          <div class={classes["postcard__preview-txt"]}>{project.overview}</div>
          <ul class={classes["postcard__tagbox"]}>
            {project.Technologies.map((teck) => (
              <li class={classes["tag__item"]}>{teck}</li>
            ))}
          </ul>
        </div>
      </article>
    </Link>
  );
};

export default ProjectItem;
