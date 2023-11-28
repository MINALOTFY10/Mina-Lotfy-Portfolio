// External Libraries and Frameworks
import { useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import projects from "../../projectsData.json";
import Projects from "./Projects";
import classes from "./ProjectsPage.module.css";
import ProjectItem from "./ProjectItem";
import colorSharp from "../../assets/img/color-sharp.png";
import Footer from "../HomePage/Footer";

import LoadingScreen from "../UI/LoadingScreen";

const ProjectsPage = () => {
  const { projects } = useLoaderData();

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Await resolve={projects}>
        {(loadedProducts) => (
          <>
            <section class={`classes.dark`}>
              <div
                class={`container py-4 mt-5 ${classes["project-container"]}`}
              >
                <div className="mt-4"></div>

                <h1 class="h1 text-center mb-5" id="pageHeaderTitle">
                  All Projects
                </h1>

                {loadedProducts.map((project) => (
                  <ProjectItem project={project} key={project.id} />
                ))}
              </div>

              <img
                className="background-image-left"
                src={colorSharp}
                alt="Image"
              />
            </section>
            <Footer />
          </>
        )}
      </Await>
    </Suspense>
  );
};

export default ProjectsPage;

async function loadProjects() {
  return projects;
}

export function loader() {
  return defer({
    projects: loadProjects(),
  });
}
