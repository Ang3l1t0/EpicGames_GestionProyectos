import './App.css';

const App = () => {
  return (
    <div classNameName="App">
      <nav classNameName="navbar navbar-expand-sm bg-primary navbar-dark">
        <a classNameName="navbar-brand" href="#">Epic</a>

        <ul className="navbar-nav">
          <li className="nav-item ">
            <a className="nav-link" href="Home.html">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Report.html">Informe</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="CreateProject.html">Crear Proyecto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Cerrar Sesión</a>
          </li>
        </ul>

      </nav>
      <br />

      <br />

      <div className="container">
        <div className="main-body">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-circle p-1 bg-primary" width="110" />
                    <div className ="mt-3">
                    <h4>Juan Molina</h4>
                    <p className ="text-muted font-size-sm">Usuario Lider</p>
                    <p className ="text-secondary mb-1">Número de proyectos: 20</p>
                    <p className ="text-secondary mb-1">Completados: 12</p>
                    <p className ="text-secondary mb-1">Iniciados: 8</p>

                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-8">

              <div className="card">
                <div className="card-body">
                  <h5 className="d-flex align-items-center mb-3 titulo">Projecto de Elaboración de Juego de Fortnite</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                  <p>Fecha de inicio: 10/11/2021</p>
                  <p>Status: Iniciado</p>
                  <a href="Project.html" className="stretched-link"></a>


                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="d-flex align-items-center mb-3 titulo">Projecto de Elaboración de Juego de Fortnite</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                  <p>Fecha de inicio: 10/11/2021</p>
                  <p>Status: Iniciado</p>
                  <a href="Project.html" className="stretched-link"></a>


                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="d-flex align-items-center mb-3 titulo">Projecto de Elaboración de Juego de Fortnite</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                  <p>Fecha de inicio: 10/11/2021</p>
                  <p>Status: Iniciado</p>
                  <a href="Project.html" className="stretched-link"></a>


                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
