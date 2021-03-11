import { useState } from 'react';

// main info section of cv header.

const MainInfo = () => {
  // state for first name, last name and occupation
  const [firstName, setFirstName] = useState('First Name');
  const [lastName, setLastName] = useState('Last Name');
  const [occupation, setOccupation] = useState('Occupation');

  // state for if first name, last name and occupation is being eddited
  const [editingFirstName, setEditingFirstName] = useState(false);
  const [editingLastName, setEditingLastName] = useState(false);
  const [editingOccupation, setEditingOccupation] = useState(false);

  // if text is clicked on, change the text to an input. when the input
  // is clicked off, change the input back to the text.

  // if name is an empty string, set it back to the placeholder name.
  const makeEdit = (e) => {
    const targetName = e.target.getAttribute('name');
    console.log(targetName);

    if (targetName === 'firstName') {
      setEditingFirstName(!editingFirstName);

      if (firstName.length === 0) {
        setFirstName('First Name');
      }
    }

    if (targetName === 'lastName') {
      setEditingLastName(!editingLastName);

      if (lastName.length === 0) {
        setLastName('Last Name');
      }
    }

    if (targetName === 'occupation') {
      setEditingOccupation(!editingOccupation);

      if (occupation.length === 0) {
        setOccupation('Occupation');
      }
    }
  };

  return (
    <div>
      {editingFirstName ? (
        <input
          autoFocus="true"
          name="firstName"
          type="text"
          value={firstName}
          onBlur={makeEdit}
          onChange={(e) => setFirstName(e.target.value)}
        />
      ) : (
        <h2 onClick={makeEdit} name="firstName">
          {firstName}
        </h2>
      )}
      {editingLastName ? (
        <input
          autoFocus="true"
          name="lastName"
          type="text"
          value={lastName}
          onBlur={makeEdit}
          onChange={(e) => setLastName(e.target.value)}
        />
      ) : (
        <h2 onClick={makeEdit} name="lastName">
          {lastName}
        </h2>
      )}
      {editingOccupation ? (
        <input
          autoFocus="true"
          name="occupation"
          type="text"
          value={occupation}
          onBlur={makeEdit}
          onChange={(e) => setOccupation(e.target.value)}
        />
      ) : (
        <h4 onClick={makeEdit} name="occupation">
          {occupation}
        </h4>
      )}
    </div>
  );
};

export default MainInfo;
