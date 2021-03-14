import { useState } from 'react';

const ContactInfo = () => {
  // state for text values
  const [address, setAddress] = useState('Address');
  const [city, setCity] = useState('Town/City');
  const [country, setCountry] = useState('Country');
  const [phone, setPhone] = useState('Phone');
  const [email, setEmail] = useState('Email');

  // state for if the text values are currently being edited
  const [editingAddress, setEditingAddress] = useState(false);
  const [editingCity, setEditingCity] = useState(false);
  const [editingCountry, setEditingCountry] = useState(false);
  const [editingPhone, setEditingPhone] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);

  // switch between text input and text div.
  // if state is empty string, set it back to the default value.
  const makeEdit = (e) => {
    const targetName = e.target.getAttribute('name');
    // console.log(targetName);

    if (targetName === 'address') {
      setEditingAddress(!editingAddress);

      if (address.length < 1) {
        setAddress('Address');
      }
    }

    if (targetName === 'city') {
      setEditingCity(!editingCity);

      if (city.length < 1) {
        setCity('Town/City');
      }
    }

    if (targetName === 'country') {
      setEditingCountry(!editingCountry);

      if (country.length < 1) {
        setCountry('Country');
      }
    }

    if (targetName === 'phone') {
      setEditingPhone(!editingPhone);

      if (phone.length < 1) {
        setPhone('Phone');
      }
    }

    if (targetName === 'email') {
      setEditingEmail(!editingEmail);

      if (email.length < 1) {
        setEmail('Email');
      }
    }
  };

  return (
    <div className="contact-info">
      {editingAddress ? (
        <input
          className="input-h5"
          autoFocus={true}
          type="text"
          value={address}
          name="address"
          onChange={(e) => setAddress(e.target.value)}
          onBlur={makeEdit}
        />
      ) : (
        <h5 className="editable" name="address" onClick={makeEdit}>
          {address}
        </h5>
      )}

      {editingCity ? (
        <input
          className="input-h5"
          autoFocus={true}
          type="text"
          value={city}
          name="city"
          onChange={(e) => setCity(e.target.value)}
          onBlur={makeEdit}
        />
      ) : (
        <h5 name="city" className="editable" onClick={makeEdit}>
          {city}
        </h5>
      )}

      {editingCountry ? (
        <input
          className="input-h5"
          autoFocus={true}
          type="text"
          value={country}
          name="country"
          onChange={(e) => setCountry(e.target.value)}
          onBlur={makeEdit}
        />
      ) : (
        <h5 name="country" className="editable" onClick={makeEdit}>
          {country}
        </h5>
      )}

      {editingPhone ? (
        <input
          className="input-h5"
          autoFocus={true}
          type="text"
          value={phone}
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          onBlur={makeEdit}
        />
      ) : (
        <h5 name="phone" className="editable" onClick={makeEdit}>
          {phone}
        </h5>
      )}

      {editingEmail ? (
        <input
          className="input-h5"
          autoFocus={true}
          type="text"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={makeEdit}
        />
      ) : (
        <h5 name="email" className="editable" onClick={makeEdit}>
          {email}
        </h5>
      )}
    </div>
  );
};

export default ContactInfo;
