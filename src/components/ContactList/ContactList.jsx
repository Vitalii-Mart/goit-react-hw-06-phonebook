import React from 'react';
import PropTypes from 'prop-types';
import { List, Total } from './ContactList.styled';
import ElemContactList from '../ElemContactList';

const ContactList = ({ contacts }) => {
  return (
    <List>
      <Total>Total contacts: {contacts.length}</Total>
      {contacts.map(({ id, name, number }) => (
        <ElemContactList key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;