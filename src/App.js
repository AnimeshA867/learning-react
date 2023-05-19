import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Textarea from "./components/Textarea";
import About from "./About";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [modeT, setmodeT] = useState("Dark mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (type1, message) => {
    setAlert({
      type: type1,
      msg: message,
      statuss: "show",
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  let toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setmodeT("Enable Dark mode.");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light Mode Enabled.");
    } else {
      setMode("dark");
      setmodeT("Enable Light mode.");
      document.body.style.backgroundColor = "grey";
      showAlert("success", "Dark Mode Enabled.");
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: root(),
      children: [
        {
          path: "/",
          element: <Textarea heading={"Enter your text here"} />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* </div> */}
    </>
  );

  function root() {
    return (
      <>
        <NavBar title="Nav" mode={mode} toggleMode={toggleMode} modeT={modeT} />
        <Alert alert={alert} />
        <div className="container my-3 align-middle">
          <Outlet />
        </div>
      </>
    );
  }
}

export default App;
