import ProjectInfo from "./ProjectInfo";
import ActivitiesSub from "./ActivitiesSub";
import { useState } from "react";

const ProjectSub = () => {

    const [myHours, setMyHours] = useState("");
    const [status, setStatus] = useState("");

    return (

      <div className="container">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-xl-8">
              <div className="card">
                <div className="card-header pb-0">
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
                        <th>Inicio</th>
                        <th>Finalización</th>
                        <th>Estimado</th>
                        <th>Horas reportadas</th>
                        <th>Mis Horas</th>
                        <th>Status</th>

                      </tr>
                    </thead>
                    <tbody>
                      <ActivitiesSub
                        nombre="Actividad 1"
                        startDate="10/11/2021"
                        finishDate="10/9/2022"
                        estimateHours="20"
                        reportedHours="20"
                      />
                      <ActivitiesSub
                        nombre="Actividad 2"
                        startDate="10/11/2021"
                        finishDate="10/9/2022"
                        estimateHours="20"
                        reportedHours="20"
                      />
                    </tbody>
                  </table>
                  <button className="btn btn-danger" type="submit">Guardar cambios</button>
                </div>
              </div>
            </div>
            <ProjectInfo
              name="Proyecto de elaboración Juego Fortnite"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua."
              startDate="10/11/2021"
              finishDate="10/9/2022"
              hours="20"
              reportedHours="20"
              status="Iniciado"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectSub;
  