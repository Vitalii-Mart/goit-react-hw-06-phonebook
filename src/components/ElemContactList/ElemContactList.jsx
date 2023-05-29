import React from 'react';
import PropTypes from 'prop-types';
import { Items, Caption, Button } from './ElemContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ElemContactList = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Items>
      <Caption>
        {name}: {number}
      </Caption>
      <Button type="button" onClick={handleDeleteContact}>
        Delete
      </Button>
    </Items>
  );
};

ElemContactList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ElemContactList;