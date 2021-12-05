const Activities = (props) => {
    
  const {
    nombre,
    startDate,
    finishDate,
    estimateHours,
    reportedHours,
    status,
  } = props;

  return (
    <tr>
      <td>{nombre}</td>
      <td>{startDate}</td>
      <td>{finishDate}</td>
      <td>{estimateHours}</td>
      <td>{reportedHours}</td>
      <td>
        <span className="badge bg-success">{status}</span>
      </td>
    </tr>
  );
};

export default Activities;
