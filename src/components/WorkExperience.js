import { useState } from 'react';
import WorkExperienceCard from './WorkExperienceCard';

const WorkExperience = () => {
  const [roleName, setRoleName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [roleStart, setRoleStart] = useState('');
  const [roleEnd, setRoleEnd] = useState('');
  const [duties, setDuties] = useState('');

  const [editExperience, setEditExperience] = useState(false);

  const [experienceCards, setExperienceCards] = useState([]);

  // reset state
  const resetState = () => {
    setRoleName('');
    setCompanyName('');
    setRoleStart('');
    setRoleEnd('');
    setDuties('');
  };

  // add a new experience card to experience
  const addNewExperienceCard = () => {
    const id = Math.floor(Math.random() * 99999999) + 1;

    const newExperienceCard = {
      roleName,
      companyName,
      roleStart,
      roleEnd,
      duties,
      id,
    };
    setExperienceCards([...experienceCards, newExperienceCard]);
    resetState();

    console.log(newExperienceCard.duties);
  };

  const cancelAddExperience = () => {
    // reset state and hide edit education menu
    resetState();
    setEditExperience(false);
  };

  const deleteExperienceCard = (id) => {
    console.log(id);
    setExperienceCards(
      experienceCards.filter((card) => {
        return card.id !== id;
      })
    );
  };

  return (
    <div>
      <h3>Work Experience</h3>
      {/* display each experience card in experience cards */}
      {experienceCards.map((card) => (
        <WorkExperienceCard
          key={card.id}
          roleName={card.roleName}
          companyName={card.companyName}
          roleStart={card.roleStart}
          roleEnd={card.roleEnd}
          duties={card.duties}
          id={card.id}
          deleteCard={deleteExperienceCard}
        />
      ))}

      {/* diplay the edit experience menu when editExperience = true */}
      {editExperience && (
        <div>
          <h5>Role:</h5>
          <input
            className="text-input text-input--large"
            type="text"
            placeholder="Enter Here"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
          />
          <h5>Company:</h5>
          <input
            className="text-input text-input--large"
            type="text"
            placeholder="Enter Here"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <h5>From:</h5>
          <input
            className="text-input text-input--small"
            type="text"
            placeholder="yyyy"
            value={roleStart}
            onChange={(e) => setRoleStart(e.target.value)}
          />
          <h5>To:</h5>
          <input
            className="text-input text-input--small"
            type="text"
            placeholder="yyyy"
            value={roleEnd}
            onChange={(e) => setRoleEnd(e.target.value)}
          />
          <h5>Responsibilities</h5>
          <textarea
            className="text-input text-input--large"
            type="text"
            placeholder="Give a description of the role."
            value={duties}
            onChange={(e) => setDuties(e.target.value)}
          />
          <div style={{ marginTop: 20 }}>
            <button
              style={{ marginRight: 20 }}
              className="btn btn--save"
              onClick={(e) => {
                setEditExperience(false);
                addNewExperienceCard();
              }}
            >
              Save
            </button>
            <button className="btn btn--cancel" onClick={cancelAddExperience}>
              Cancel
            </button>
          </div>
        </div>
      )}
      {!editExperience && (
        <button className="btn btn--add" onClick={(e) => setEditExperience(true)}>
          Add
        </button>
      )}
    </div>
  );
};

export default WorkExperience;
