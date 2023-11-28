import "animate.css";
import AllProjectsButton from "./AllProjectsButton";
import { Link } from "react-router-dom";

import classes from "./Projects.module.css";

import ProjectItem from "./ProjectItem";

const Projects = (props) => {

  return (
    <section class={`classes.dark`} id="projects">
      <div class={`container py-4 ${classes["project-container"]}`}>
        <h1 class="h1 text-center mb-5" id="pageHeaderTitle">
          Projects
        </h1>

        {props.projects.slice(0, 2).map((project) => (
          <ProjectItem project={project} key={project.id} />
        ))}

        <Link to="/Projects">
          <AllProjectsButton />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
