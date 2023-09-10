import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { ContactForm } from './FormContacts/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

const getInitialContacts = () => {
  const savedOurContacts = localStorage.getItem('contacts');
  if (savedOurContacts !== null) {
    return JSON.parse(savedOurContacts);
  } else {
    return [];
  }
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isNameNotUnique = contacts.some(
      contact => contact.name.toUpperCase() === newContact.name.toUpperCase()
    );

    if (!isNameNotUnique) {
      setContacts(prevContacts => [
        ...prevContacts,
        { id: nanoid(5), ...newContact },
      ]);
    } else {
      alert(`${newContact.name} is already in contacts`);
    }
  };

  const changeContactsFilter = newFilter => {
    setFilter(newFilter);
  };

  const deleteContact = contact => {
    setContacts(prevState =>
      prevState.filter(contactId => contactId.id !== contact)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toUpperCase().includes(filter.toUpperCase())
  );

  return (
    <Layout>
      <ContactForm onAdd={addContact} />
      <Filter filter={filter} onFilter={changeContactsFilter} />
      <ContactsList allContacts={filteredContacts} onDelete={deleteContact} />
      <GlobalStyle />
    </Layout>
  );
};
