import React from "react";
import App from "./App";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";

export default function Layout() {
  return (
    <div>
      <Header />
      <Home />
      <About/>
      <Project/>
      <Contact/>
    


      {/* <Outlet /> */}

    </div>
  );
}
