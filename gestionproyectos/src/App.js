import { render } from "react-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import Project from "./Project";

const App = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <Project />
    </div>
  );
};

render(<App />, document.getElementById("root"));
