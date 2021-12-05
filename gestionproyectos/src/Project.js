import { useState } from "react";
import Activities from "./Activities";
import Participants from "./Participants";
import ProjectInfo from "./ProjectInfo";
import Navbar from "./Navbar";

const Project = () => {
  return (
      
    <div className="container">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-xl-8">
            <div className="card">
              <div className="card-header pb-0">
                <div className="card-actions float-right btn">
                  <a href="AddParticipant.html">
                    <input
                      type="button"
                      className="btn btn-danger btn-sm"
                      defaultValue="Agregar participante"
                    />
                  </a>
                </div>
                <h4 className="card-title mb-0 titulo">Participantes</h4>
              </div>
              <div className="card-body">
                <table
                  className="table table-striped"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Horas reportadas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Participants number="1" name="Pedro" hours="5" />
                    <Participants number="2" name="Juan" hours="2" />
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card">
              <div className="card-header pb-0">
                <div className="card-actions float-right btn">
                  <a href="CreateActivity.html">
                    <input
                      type="button"
                      className="btn btn-danger btn-sm"
                      defaultValue="Agregar actividad"
                    />
                  </a>
                </div>
                <h4 className="card-title mb-0 titulo">Actividades</h4>
              </div>
              <div className="card-body">
                <table
                  className="table table-striped"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Fecha de inicio</th>
                      <th>Fecha de finalización</th>
                      <th>Horas estimadas</th>
                      <th>Horas reportadas</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Activities
                      nombre="Actividad 1"
                      startDate="10/11/2021"
                      finishDate="10/9/2022"
                      estimateHours="20"
                      reportedHours="20"
                      status="Iniciado"
                    />
                    <Activities
                      nombre="Actividad 2"
                      startDate="10/11/2021"
                      finishDate="10/9/2022"
                      estimateHours="20"
                      reportedHours="20"
                      status="Iniciado"
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <ProjectInfo name="Proyecto de elaboración Juego Fortnite" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua." startDate="10/11/2021"
                  finishDate="10/9/2022"
                  hours="20"
                  reportedHours="20"
                  status="Iniciado"/>
        </div>
      </div>
    </div>
  );
};

export default Project;
