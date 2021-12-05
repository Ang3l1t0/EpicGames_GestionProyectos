import { useState } from "react";

const CreateAcivity = () => {

    const [name, setName] = useState ("");
    const [description, setDesciption] = useState ("");
    const [startDate, setStartDate] = useState ("");
    const [finishDate, setFinishDate] = useState ("");
    const [estimatedHours, setEstimatedHours] = useState ("");
    const [nameSearch, setNameSearch] = useState ("");

    elements = ["nicolas", "pepito", "juan"]


    return (
        <div className="container">
        <div className="col">
          <div className="row">
            <div className="col mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="e-profile">
                    <div className="row">
                      <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                        <div className="text-center text-sm-left mb-2 mb-sm-0">
                          <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                            Creación de Actividad
                          </h4>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="tab-content pt-3">
                      <div className="tab-pane active">
                        <form className="form" noValidate>
                          <div className="row">
                            <div className="col">
                              <div className="row">
                                <div className="col">
                                  <div className="form-group">
                                    <label>Nombre</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Nombre del proyecto"
                                      onChange={(e) => setName(e.target.value)}
                                      value={name}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col mb-3">
                                  <div className="form-group">
                                    <label>Descripción</label>
                                    <textarea
                                      className="form-control"
                                      rows={5}
                                      placeholder="Descripción completa del proyecto"
                                      onChange={(e) => setDesciption(e.target.value)}
                                      value={description}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 col-sm-6 mb-3">
                              <div className="row">
                                <div className="col">
                                  <div className="form-group">
                                    <label>Fecha de inicio</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="DD/MM/AAAA"
                                      onChange={(e) => setStartDate(e.target.value)}
                                      value={startDate}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <div className="form-group">
                                    <label>Fecha de finalización</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="DD/MM/AAAA"
                                      onChange={(e) => setFinishDate(e.target.value)}
                                      value={finishDate}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <div className="form-group">
                                    <label>Tiempo estimado </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="en horas"
                                      onChange={(e) => setEstimatedHours(e.target.value)}
                                      value={estimatedHours}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col mb-3">
                              <div className="form-group">
                                <div className="container">
                                  <div className="container-fluid p-0">
                                    <h1 className="h4 mb-3">
                                      Asignar usuarios subordinados
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
                                                onChange={(e) => setNameSearch(e.target.value)}
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
                                                        {
                                                        elements
                                                            .filter(e => e.includes(nameSearch))
                                                            .map(e => <tr><td key={ e }>{ e }</td>
                                                            </tr>)
                                                        }
                                                  <tr>
                                                    <td>1</td>
                                                    <td>Garrett Winters</td>
                                                    <td>
                                                      <span className="badge bg-success">
                                                        Asignar
                                                      </span>
                                                    </td>
                                                  </tr>
                                                  
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
                                        Crear Actividad
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
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
  
  export default CreateAcivity;
  