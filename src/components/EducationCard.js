const EducationCard = ({ schoolName, degreeName, schoolStart, schoolEnd }) => {
  return (
    <div>
      <h4>{schoolName}</h4>
      <h4>{degreeName}</h4>
      <h5>{`${schoolStart} to ${schoolEnd}`}</h5>
    </div>
  );
};

export default EducationCard;
