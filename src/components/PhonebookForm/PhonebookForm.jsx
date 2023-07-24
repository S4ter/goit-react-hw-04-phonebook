import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './PhonebookForm.styles.css';

export const PhonebookForm = ({ addContact, checkDuplicateContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { value, name } = event.target;
    event.preventDefault();
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
  const handleSubmit = event => {
    event.preventDefault();

    if (checkDuplicateContact(name)) {
      alert('Contact with the same name already exists!');
      return;
    }

    addContact({ id: nanoid(), name, number });
    setName('');
    setNumber('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="phonebook_form">
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
          pattern="^[A-Za-z.'\- ]+$"
          className="form_input"
          placeholder="Name"
        />
        <h2>Number</h2>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
          pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
          className="form_input"
          placeholder="Number"
        />
        <button type="submit" className="submit_button">
          Add Contact
        </button>
      </form>
    </div>
  );
};
