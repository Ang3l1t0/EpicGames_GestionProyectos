import React, { Component } from "react";
import Navbar from "./components/Navbar";
import User from "./components/User";
import ProjectCardSub from "./components/ProjectCardSub";

class HomeSub extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="main-body">
            <div className="row">
              <User />
              <div className="col-lg-8">
                <ProjectCardSub />
                <ProjectCardSub />
                <ProjectCardSub />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSub;
