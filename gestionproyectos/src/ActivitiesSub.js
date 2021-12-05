const ActivitiesSub = (props) => {
  const {
    nombre,
    startDate,
    finishDate,
    estimateHours,
    reportedHours,
  } = props;

  return (
    <tr>
      <td>{nombre}</td>
      <td>{startDate}</td>
      <td>{finishDate}</td>
      <td>{estimateHours}</td>
      <td>{reportedHours}</td>
      <td><input className="form-control" type="text" placeholder=""></input></td>
      <td><input className="form-control" type="text" placeholder=""></input></td>
    </tr>
  );
};

export default ActivitiesSub;
