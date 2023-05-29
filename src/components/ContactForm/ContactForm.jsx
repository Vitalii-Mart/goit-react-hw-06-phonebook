import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Form, Input, Button, Label } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleInputChange = evt => {
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    } else if (evt.target.name === 'number') {
      setNumber(evt.target.value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const existingContact = contacts.find(contact =>
      contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!existingContact) {
      dispatch(addContact({ name, number, id: shortid.generate() }));
    } else {
      alert(`${name} is already in contacts`);
    }

    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input
          type="text"
          value={name}
          onChange={handleInputChange}
          name="name"
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <Label htmlFor={numberInputId}>Number</Label>
        <Input
          type="tel"
          value={number}
          onChange={handleInputChange}
          name="number"
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
}

ContactForm.propTypes = {
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default ContactForm;