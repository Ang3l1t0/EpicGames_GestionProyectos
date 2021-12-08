import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const AddParticipant = () => {
  let { project } = useParams();

  const [nameSearch, setNameSearch] = useState("");

  elements = [
    { ID: 1, name: "Nicolas Molina" },
    { ID: 2, name: "Pepito Perez" },
    { ID: 3, name: "Juan Pelaez" },
  ];

  return (
    <div className="container">
      <div className="col">
        <div className="row">
          <div className="col mb-3">
            <div className="card">
              <div className="card-body">
                <div className="e-profile">
                        <div className="row">
                          <div className="col mb-3">
                            <div className="form-group">
                              <div className="container">
                                <div className="container-fluid p-0">
                                  <h1 className="h4 mb-3">
                                    Asignar usuarios subordinados - Proyecto {project}
                                  </h1>
                                  <br />
                                  <div className="container">
                                    <div className="row">
                                      <div className="card">
                                        <div className="card-body">
                                          <div className="input-group mb-0">
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Buscar..."
                                              aria-describedby="project-search-addon"
                                              onChange={(e) =>
                                                setNameSearch(e.target.value)
                                              }
                                              value={nameSearch}
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
                                      </div>
                                    </div>
                                  </div>
                                  <br />
                                  <div className="row">
                                    <div className="col-xl-8">
                                      <div className="card">
                                        <div className="card-header pb-0">
                                          <div className="card-body">
                                            <table
                                              className="table table-striped"
                                              style={{ width: "100%" }}
                                            >
                                              <thead>
                                                <tr>
                                                  <th>ID</th>
                                                  <th>Nombre</th>
                                                  <th>Acción</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                {elements
                                                  .filter((e) =>
                                                    e.name
                                                      .toLowerCase()
                                                      .includes(
                                                        nameSearch.toLowerCase()
                                                      )
                                                  )
                                                  .map((e) => (
                                                    <tr>
                                                      <td key={e.ID}>{e.ID}</td>
                                                      <td>{e.name}</td>
                                                      <td>
                                                        <span className="badge bg-success">
                                                          Asignar
                                                        </span>
                                                      </td>
                                                    </tr>
                                                  ))}
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col d-flex justify-content-end">
                                    <button
                                      className="btn btn-primary"
                                      type="submit"
                                    >
                                      Asignar
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   
  );
};
export default AddParticipant;
