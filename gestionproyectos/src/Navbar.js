const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <a className="navbar-brand" href="#">
        Epic
      </a>

      <ul className="navbar-nav">
        <li className="nav-item ">
          <a className="nav-link" href="Home.html">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Report.html">
            Informe
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="CreateProject.html">
            Crear Proyecto
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            Cerrar Sesión
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
