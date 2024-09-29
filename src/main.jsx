import * as React from "react";
import * as ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./layout.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/project",
//         element: <Project />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <Layout/>
  </React.StrictMode>
);
