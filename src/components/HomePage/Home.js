// External Libraries and Frameworks
import { useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import projects from "../../projectsData.json"

// Components
import LoadingScreen from "../UI/LoadingScreen";
import Banner from "./Banner";
import Footer from "./Footer";
import Skills from "./Skills";
import Projects from "../ProjectSection/Projects";
import Contact from "./Contact";

function HomePage() {
  const { projects } = useLoaderData();

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Banner />
      <Skills />

      <Await resolve={projects}>
        {(loadedProducts) => (
          <Projects theme="dark" projects={loadedProducts} />
        )}
      </Await>

      <Contact />
      <Footer />
    </Suspense>
  );
}

export default HomePage;

async function loadProjects() {
  return projects
}



export function loader() {
  return defer({
    projects: loadProjects(),
  });
}
