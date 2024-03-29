import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  return (
    <div className="login-container animated fadeInDown bootstrap snippets bootdeys">
      <div className="loginbox bg-white">
        <div className="loginbox-title">Inicio de Sesión</div>
        <br />
        <br />
        <div className="loginbox-or">
          <div className="or-line" />
        </div>
        <div className="loginbox-textbox">
          <input
            type="text"
            className="form-control"
            placeholder="Correo electrónico"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="loginbox-textbox">
          <input
            type="text"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Contraseña"
          />
        </div>
        <div className="loginbox-submit">
          <input
            type="button"
            className="btn btn-primary btn-block"
            defaultValue="Ingresar"
            onClick={() => {
              navigate("/home");
            }}
          />
        </div>
        <div className="loginbox-signup">
          <p>
            ¿No tienes cuenta?
            <Link to="/register">Registrate</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
