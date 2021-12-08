import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Project from "./Project";
import CreateAcivity from "./CreateActivity";
import CreateProject from "./CreateProject";
import Report from "./Report";
import ProjectSub from "./ProjectSub";
import AddParticipant from "./AddParticipant";
import HomeSub from "./HomeSub";
import Register from "./Register";


const rootElement = document.getElementById("root");

render(
  <div>
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/report" element={<Report />} />
        <Route path="/createproject" element={<CreateProject />} />
        <Route path="/activities/:project" element={<CreateAcivity />} />
        <Route path="/participant/:project" element={<AddParticipant />} />
        <Route path="/sub/home/" element={<HomeSub />} />
        <Route path="/sub/project/" element={<ProjectSub />} />
      </Routes>
    </Router>
  </div>,
  rootElement
);
