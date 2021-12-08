import { useState } from "react";
import ProjectsReport from "./components/ProjectsReport";

const Report = () => {
  const [myHours, setMyHours] = useState("");
  const [status, setStatus] = useState("");

  return (
  <div className="container">
    <div className="row">
      <div className="col-xl-3 col-md-6">
        <div className="card bg-pattern">
          <div className="card-body">
            <div className="float-right">
              <i className="fa fa-archive text-primary h4 ml-3" />
            </div>
            <h5 className="font-size-20 mt-0 pt-1">20</h5>
            <p className="text-muted mb-0">Total de proyectos</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6">
        <div className="card bg-pattern">
          <div className="card-body">
            <div className="float-right">
              <i className="fa fa-th text-primary h4 ml-3" />
            </div>
            <h5 className="font-size-20 mt-0 pt-1">21</h5>
            <p className="text-muted mb-0">Completados</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6">
        <div className="card bg-pattern">
          <div className="card-body">
            <div className="float-right">
              <i className="fa fa-file text-primary h4 ml-3" />
            </div>
            <h5 className="font-size-20 mt-0 pt-1">08</h5>
            <p className="text-muted mb-0">Iniciados</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group mb-0">
                <label>Buscar</label>
                <div className="input-group mb-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar..."
                    aria-describedby="project-search-addon"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-danger"
                      type="button"
                      id="project-search-addon"
                    >
                      <i className="fa fa-search search-icon font-12" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* end row */}
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <div className="table-responsive project-list">
              <table className="table project-table table-centered table-nowrap">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Projecto</th>
                    <th scope="col">Fecha de inicio</th>
                    <th scope="col">Status</th>
                    <th scope="col">Horas de proyecto</th>
                    <th scope="col">Horas reportadas</th>
                    <th scope="col">Acción</th>
                  </tr>
                </thead>
                <tbody>
                <ProjectsReport
                      number="1"
                      project="Creacion de juego"
                      startDate="10/11/2021"
                      status="Completado"
                      estimatedHours="120"
                      reportedHours="70"
                    />
                <ProjectsReport
                      number="2"
                      project="Creacion de juego"
                      startDate="10/11/2021"
                      status="Completado"
                      estimatedHours="120"
                      reportedHours="70"
                    />
                   <ProjectsReport
                      number="3"
                      project="Creacion de juego"
                      startDate="10/11/2021"
                      status="Completado"
                      estimatedHours="120"
                      reportedHours="70"
                    />
                  
                 
                </tbody>
              </table>
            </div>
            {/* end project-list */}
            <div className="pt-3">
              <ul className="pagination justify-content-end mb-0">
                <li className="page-item disabled">
                  <a
                    className="page-link"
                    href="#"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    Previous
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Report;
