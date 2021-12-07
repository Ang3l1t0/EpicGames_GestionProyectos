import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import Project from "./Project";
import CreateAcivity from "./CreateActivity";
import ProjectSub from "./ProjectSub";
import { createElement, StrictMode } from "react";

const rootElement = document.getElementById("root");

render(
  <div>
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/project" element={<Project />} />
        <Route path="/activities/:project" element={<CreateAcivity />} />
        <Route path="/sub/project/" element={<ProjectSub />} />
      </Routes>
    </Router>
  </div>,
  rootElement
);
