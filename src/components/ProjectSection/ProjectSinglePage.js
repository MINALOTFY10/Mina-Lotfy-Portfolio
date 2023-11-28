import classes from "./ProjectSinglePage.module.css";
import { Suspense, useState, useEffect, Fragment } from "react";
import { useRouteLoaderData, json, defer, Await } from "react-router-dom";
import projects from "../../projectsData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import colorSharp from "../../assets/img/color-sharp.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon4 from "../../assets/img/nav-icon4.png";
import SimpleSlider from "../UI/ImagesSlider";

const ProjectSinglePage = () => {
  const { project } = useRouteLoaderData("project-detail");
  const [myProject, setMyProject] = useState("");

  useEffect(() => {
    if (project) {
      setMyProject(project);
    }
  }, [project]);

  console.log(myProject);

  return (
    <section class={`classes.dark`}>
      <div class={`container py-5 mt-5 ${classes["project-container"]}`}>
        <div className="mt-5"></div>

        <article id={project.id} class={`${classes.postcard} dark blue`}>
          <div class={classes["postcard__text"]}>
            <h1
              class={`${classes["postcard__title"]} blue d-flex justify-content-between`}
            >
              <a href="#">{project.title}</a>
              <span className="navbar-text p-0">
                <div className="social-icon">
                  <a href={project.github} target="_blank">
                    <img src={navIcon2} alt="Github" />
                  </a>
                  <a href={project.website} target="_blank">
                    <img src={navIcon4} alt="Live Website" />
                  </a>
                </div>
              </span>
            </h1>
            <div class={`${classes["postcard__subtitle"]} small`}></div>
            <div class={classes["postcard__bar"]}></div>

            <ul class={classes["postcard__tagbox"]}>
              {project.Technologies.map((teck) => (
                <li class={classes["tag__item"]}>{teck}</li>
              ))}
            </ul>

            <SimpleSlider images={project.images} />

            <div className="overview">
              <h1 className="h2 mt-4 mb-3" id="pageHeaderTitle">
                Overview 📑
              </h1>
              <div class={classes["postcard__preview-txt"]}>
                {project.overview}
              </div>
            </div>

            <div className="features mt-5">
              <h1 className="h2 mt-4 mb-3" id="pageHeaderTitle">
                Features 🌟
              </h1>
              <ol
                className={`postcard__preview-txt ${classes["postcard__preview-txt"]}`}
              >
                {project.features.map((feature, index) => (
                  <li className={`${classes["features"]} ms-4`} key={index}>
                    <p className="fw-bold m-1">{feature.title}</p>
                    <p className="ms-4">{feature.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </article>
      </div>

      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default ProjectSinglePage;

async function loadProject(id) {
  console.log(id);
  const project = projects.find((proj) => proj.id == id);
  return project;
}

export async function loader({ request, params }) {
  const id = params.projectId;
  console.log(id);

  return defer({
    project: await loadProject(id),
  });
}
