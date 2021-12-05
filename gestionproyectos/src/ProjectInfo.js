const ProjectInfo = (props) => {
  const {
    name,
    description,
    startDate,
    finishDate,
    hours,
    reportedHours,
    status,
  } = props;

  return (
    <div className="col-xl-4">
      <div className="card">
        <div className="card-body">
          <div className="row g-0">
            <div className="col-sm-9 col-xl-12 col-xxl-9 titulo">
              <strong>{name}</strong>
              <br />
              <br />
            </div>
            <div className="col-sm-9 col-xl-12 col-xxl-9 ">
              <p>{description}</p>
            </div>
          </div>
          <table className="table table-sm mt-2 mb-4">
            <tbody>
              <tr>
                <th>Fecha inicio</th>
                <td>{startDate}</td>
              </tr>
              <tr>
                <th>Fecha final</th>
                <td>{finishDate}</td>
              </tr>
              <tr>
                <th>Horas del proyecto</th>
                <td>{hours}</td>
              </tr>
              <tr>
                <th>Horas reportadas</th>
                <td>{reportedHours}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>
                  <span className="badge bg-success">{status}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <input
            type="button"
            className="btn btn-danger btn-block"
            defaultValue="Finalizar Proyecto"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
