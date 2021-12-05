import { render } from "react-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import Project from "./Project";
import CreateAcivity from "./CreateActivity";
import ProjectSub from "./ProjectSub";

const App = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <ProjectSub />
    </div>
  );
};

render(<App />, document.getElementById("root"));
