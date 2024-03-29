import React, { Component } from "react";
import Navbar from "./components/Navbar";
import User from "./components/User";
import Projectinfo from "./components/ProjectCard";
import ProjectCard from "./components/ProjectCard";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="main-body">
            <div className="row">
              <User />
              <div className="col-lg-8">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
