import React, { Component } from "react";
import Navbar from "./components/Navbar";
import User from "./components/User";
import Projectinfo from "./components/Projectinfo";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Navbar />
          <User />
          <Projectinfo />
        </div>
      </div>
    );
  }
}

export default App;
