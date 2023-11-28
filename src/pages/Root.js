// External Libraries and Frameworks
import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavBar } from "../components/NavBar";
// import { getTokenDuration } from "../util/auth";

// Components

function RootLayout() {
  const isShowCart = useSelector((state) => state.toggle.showStore);
  const submit = useSubmit();
  const token = useLoaderData();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = "";

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
