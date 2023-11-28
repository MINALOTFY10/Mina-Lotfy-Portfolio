import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { loader as projectsLoader } from "../src/components/HomePage/Home";
import ProjectSinglePage, {
  loader as projectDetailLoader,
} from "./components/ProjectSection/ProjectSinglePage";

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Banner />
//       <Skills />
//       <Projects theme="dark"/>
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./components/HomePage/Home";
import ProjectsPage from "./components/ProjectSection/ProjectsPage";

let isInitial = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    id: "root",
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: projectsLoader,
      },
      {
        path: "Projects",
        children: [
          {
            index: true,
            element: <ProjectsPage />,
            loader: projectsLoader,
          },
          {
            path: ":projectId",
            id: "project-detail",
            loader: projectDetailLoader,
            children: [
              {
                index: true,
                element: <ProjectSinglePage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
