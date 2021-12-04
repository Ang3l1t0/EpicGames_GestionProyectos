import { useState } from "react";

const Login = () =>{
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
          />
        </div>
        <div className="loginbox-signup">
          <p>
            ¿No tienes cuenta?
            <a href="#register.html">Registrate</a>
          </p>
        </div>
      </div>
    </div>
  )
}



const SearchParams = () => {
  const [location, setLocation] = useState("Colombia");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
