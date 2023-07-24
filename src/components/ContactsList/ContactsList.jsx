import React, { useState } from 'react';
import './ContactsList.styles.css';

export const ContactsList = ({
  filter,
  onFilterChange,
  contacts,
  deleteContact,
}) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="filter_form">
      <h2 className="filter_title">Contacts:</h2>
      <input
        type="text"
        name="filter"
        placeholder="Search..."
        value={filter}
        onChange={onFilterChange}
        className="filter_input"
      />
      <ul>
        {filteredContacts.map(({ name, number }, index) => (
          <li key={index}>
            {name}: {number}
            <button
              className="delete_button"
              onClick={() => deleteContact(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
