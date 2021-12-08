const ProjectsReport = (props) => {
  const {
    number,
    project,
    startDate,
    status,
    estimatedHours,
    reportedHours,
  } = props;

  return (
    <tr>
    <th scope="row">{number}</th>
    <td>{project}</td>
    <td>{startDate}</td>
    <td>
      <span className="text-success font-12">
        <i className="mdi mdi-checkbox-blank-circle mr-1" />{" "}
        {status}
      </span>
    </td>
    <td>{estimatedHours}</td>
    <td>{reportedHours}</td>
    <td>
      <div className="action">
        <a
          href="#"
          className="text-success mr-4"
          data-toggle="tooltip"
          data-placement="top"
          title
          data-original-title="Edit"
        >
          {" "}
          <i className="fa fa-pencil h5 m-0" />
        </a>
        <a
          href="#"
          className="text-danger"
          data-toggle="tooltip"
          data-placement="top"
          title
          data-original-title="Close"
        >
          {" "}
          <i className="fa fa-remove h5 m-0" />
        </a>
      </div>
    </td>
  </tr>
  );
};

export default ProjectsReport;
