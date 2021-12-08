import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  return (
    <div className="login-container animated fadeInDown bootstrap snippets bootdeys">
      <div className="loginbox bg-white">
        <div className="loginbox-title">Registro</div>
        <br />
        <br />
        <div className="loginbox-or">
          <div className="or-line" />
        </div>
        <div className="loginbox-textbox">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
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
        <div className="loginbox-textbox">
          <input
            type="text"
            className="form-control"
            id="confPassword"
            onChange={(e) => setConfPassword(e.target.value)}
            value={confPassword}
            placeholder="Confirmar Contraseña"
          />
        </div>
        <div className="loginbox-submit">
          <input
            type="button"
            className="btn btn-primary btn-block"
            defaultValue="Registrar"
          />
        </div>
        <div className="loginbox-signup">
          <p>
            ¿Ya tienes cuenta?
            <Link to="/">Iniciar Sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
