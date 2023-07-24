import React, { useEffect, useState } from 'react';
import { ContactsList } from './ContactsList/ContactsList.jsx';
import { PhonebookForm } from './PhonebookForm/PhonebookForm.jsx';

export const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if ('addedContacts' in localStorage) {
      const storedContacts = localStorage.getItem('addedContacts');
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('addedContacts', JSON.stringify(contacts));
  }, [contacts]);

  const checkDuplicateContact = name => {
    return contacts.some(contact => contact.name === name);
  };
  const addContact = contact => {
    setContacts(prevState => [...prevState, contact]);
    console.log(contacts);
  };
  const deleteContact = index => {
    setContacts(prevState => {
      const updatedContacts = [...prevState];
      updatedContacts.splice(index, 1);
      return updatedContacts;
    });
  };
  const handleFilterChange = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <PhonebookForm
        addContact={addContact}
        checkDuplicateContact={checkDuplicateContact}
      />

      <ContactsList
        contacts={filteredContacts}
        deleteContact={deleteContact}
        filter={filter}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
};
