import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';
import { filterContact } from '../../redux/contactsSlice';

const Filter = ({ value }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <>
      <Label>Find contacts by name</Label>
      <Input type="text" value={value} onChange={handleChange} />
    </>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string,
// };

export default Filter;