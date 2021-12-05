const Participants = (props) => {

  const { number, name, hours } = props;
  
  return (
    <tr>
      <td>{number}</td>
      <td>{name}</td>
      <td>{hours}</td>
    </tr>
  );
};

export default Participants;
