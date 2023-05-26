import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import { Section, Title } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      const cont = {
        id: shortid.generate(),
        name,
        number,
      };
      setContacts(prevContacts => [cont, ...prevContacts]);
    }
  };

  const changeFiltar = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilter = () => {
    const normalFiltar = filter.toLowerCase();

    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(normalFiltar)
    );
  };

  const onDeleteContact = contactId => {
    setContacts(cont => cont.filter(({ id }) => id !== contactId));
  };

  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm addContact={addContact} />

      <Title>Contacts</Title>
      <Filter onChange={changeFiltar} value={filter} />
      <ContactList contacts={getFilter()} onDeleteContact={onDeleteContact} />
    </Section>
  );
};

export default App;
