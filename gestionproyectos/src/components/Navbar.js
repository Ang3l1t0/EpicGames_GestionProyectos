import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <a className="navbar-brand" href="#">
        Epic
      </a>

      <ul className="navbar-nav">
        <li className="nav-item ">
        <Link to="/home" className="nav-link">
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/project" className="nav-link">
            Informe
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/createproject" className="nav-link">
            Crear Proyecto
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/" className="nav-link">
            Cerrar Sesión
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
