import { useState } from 'react';
import EducationCard from './EducationCard';

const Education = () => {
  const [schoolName, setSchoolName] = useState('');
  const [degreeName, setDegreeName] = useState('');
  const [schoolStart, setSchoolStart] = useState('');
  const [schoolEnd, setSchoolEnd] = useState('');

  const [editEducation, setEditEducation] = useState(false);
  // const [showEducation, setShowEducation] = useState(false);

  const [educationCards, setEducationCards] = useState([]);

  const [makingEdit, setMakingEdit] = useState(false);

  // reset state
  const resetState = () => {
    setSchoolName('');
    setDegreeName('');
    setSchoolStart('');
    setSchoolEnd('');
  };

  const cancelAddEducation = () => {
    // reset state and hide edit education menu
    resetState();
    setEditEducation(false);
  };

  // add a new education card to education
  const addNewEducationCard = () => {
    const id = Math.floor(Math.random() * 99999999) + 1;

    const newEducationCard = {
      schoolName,
      degreeName,
      schoolStart,
      schoolEnd,
      id,
    };
    setEducationCards([...educationCards, newEducationCard]);
    resetState();
  };

  const deleteEducationCard = (id) => {
    // console.log(id);
    setEducationCards(
      educationCards.filter((card) => {
        return card.id !== id;
      })
    );
  };

  const editCard = (id) => {
    const toEdit = educationCards.filter((card) => {
      return card.id === id;
    })[0];

    console.log(toEdit);
  };

  return (
    <div className="education">
      <h3>Education</h3>

      {/* display each education card in education cards */}
      {educationCards.map((card) => (
        <EducationCard
          key={card.id}
          schoolName={card.schoolName}
          degreeName={card.degreeName}
          schoolStart={card.schoolStart}
          schoolEnd={card.schoolEnd}
          id={card.id}
          deleteCard={deleteEducationCard}
          editCard={editCard}
          makingEdit={makingEdit}
        />
      ))}

      {/* diplay the edit eduction menu when editEducation = true */}
      {editEducation && (
        <div>
          <h5>Name of University or School:</h5>
          <input
            className="text-input text-input--large"
            type="text"
            placeholder="Enter Here"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
          <h5>Qualification/Degree:</h5>
          <input
            className="text-input text-input--large"
            type="text"
            placeholder="Enter Here"
            value={degreeName}
            onChange={(e) => setDegreeName(e.target.value)}
          />
          <h5>From:</h5>
          <input
            className="text-input text-input--small"
            type="text"
            placeholder="yyyy"
            value={schoolStart}
            onChange={(e) => setSchoolStart(e.target.value)}
          />
          <h5>To:</h5>
          <input
            className="text-input text-input--small"
            type="text"
            placeholder="yyyy"
            value={schoolEnd}
            onChange={(e) => setSchoolEnd(e.target.value)}
          />
          <div style={{ marginTop: 20 }}>
            <button
              style={{ marginRight: 20 }}
              className="btn btn--save"
              onClick={(e) => {
                setEditEducation(false);
                addNewEducationCard();
              }}
            >
              Save
            </button>
            <button className="btn btn--cancel" onClick={cancelAddEducation}>
              Cancel
            </button>
          </div>
        </div>
      )}
      {!editEducation && (
        <button className="btn btn--add" onClick={(e) => setEditEducation(true)}>
          Add
        </button>
      )}
    </div>
  );
};

export default Education;
