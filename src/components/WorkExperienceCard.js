import { AiOutlineCloseCircle } from 'react-icons/ai';

const WorkExperienceCard = (props) => {
  const { roleName, companyName, roleStart, roleEnd, duties, id, deleteCard } = props;
  return (
    <div
      style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, marginBottom: 20 }}
    >
      <div>
        <h4>{roleName}</h4>
        <h4>{companyName}</h4>
        <h5>{`${roleStart} to ${roleEnd}`}</h5>
        <p>{duties}</p>
      </div>
      <AiOutlineCloseCircle
        style={{ color: 'red', fontSize: 20, cursor: 'pointer' }}
        onClick={(e) => deleteCard(id)}
      />
    </div>
  );
};

export default WorkExperienceCard;
