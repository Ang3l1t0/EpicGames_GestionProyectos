import React, { Component } from "react";
import Navbar from "./components/Navbar";
import User from "./components/User";
import Projectinfo from "./components/Projectinfo";

class App extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="main-body">
            <div class="row">
              <Navbar />
              <User />
              <div class="col-lg-8">
                <Projectinfo />
                <Projectinfo />
                <Projectinfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
