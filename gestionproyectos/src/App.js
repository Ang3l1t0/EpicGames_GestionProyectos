import { render } from "react-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import Project from "./Project";
import CreateAcivity from "./CreateActivity";

const App = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <CreateAcivity />
    </div>
  );
};

render(<App />, document.getElementById("root"));
