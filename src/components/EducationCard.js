import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

const EducationCard = (props) => {
  const {
    schoolName,
    degreeName,
    schoolStart,
    schoolEnd,
    id,
    deleteCard,
    editCard,
    makingEdit,
  } = props;
  return !makingEdit ? (
    <div
      style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, marginBottom: 20 }}
    >
      <div>
        <h4>{schoolName}</h4>
        <h4>{degreeName}</h4>
        <h5>{`${schoolStart} to ${schoolEnd}`}</h5>
      </div>
      <div>
        <FiEdit
          style={{ color: 'green', fontSize: 20, cursor: 'pointer', marginRight: 16 }}
          onClick={(e) => editCard(id)}
        />
        <AiOutlineCloseCircle
          style={{ color: 'red', fontSize: 20, cursor: 'pointer' }}
          onClick={(e) => deleteCard(id)}
        />
      </div>
    </div>
  ) : (
    <div>hello</div>
  );
};

export default EducationCard;
