import { render } from "react-dom";
import Login from "./Login";

const App = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

render(<App />, document.getElementById("root"));