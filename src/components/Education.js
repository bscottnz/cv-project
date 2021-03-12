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
    const newEducationCard = (
      <EducationCard
        schoolName={schoolName}
        degreeName={degreeName}
        schoolStart={schoolStart}
        schoolEnd={schoolEnd}
      />
    );
    setEducationCards([...educationCards, newEducationCard]);
    resetState();
  };

  return (
    <div className="education">
      <h3>Education</h3>

      {/* display each education card in education cards */}
      {[educationCards]}

      {/* diplay the edit eduction menu when editEducation = true */}
      {editEducation && (
        <>
          <h5>Name of University or School:</h5>
          <input
            type="text"
            placeholder="Enter Here"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
          <h5>Qualification/Degree:</h5>
          <input
            type="text"
            placeholder="Enter Here"
            value={degreeName}
            onChange={(e) => setDegreeName(e.target.value)}
          />
          <h5>From:</h5>
          <input
            type="text"
            placeholder="yyyy"
            value={schoolStart}
            onChange={(e) => setSchoolStart(e.target.value)}
          />
          <h5>To:</h5>
          <input
            type="text"
            placeholder="yyyy"
            value={schoolEnd}
            onChange={(e) => setSchoolEnd(e.target.value)}
          />
          <div>
            <button
              onClick={(e) => {
                setEditEducation(false);
                addNewEducationCard();
              }}
            >
              Save
            </button>
            <button onClick={cancelAddEducation}>Cancel</button>
          </div>
        </>
      )}
      {!editEducation && <button onClick={(e) => setEditEducation(true)}>Add</button>}
    </div>
  );
};

export default Education;
