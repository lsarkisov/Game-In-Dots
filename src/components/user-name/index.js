import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const UserName = ({ onSetUserName }) => (
  <Form.Control type="text" placeholder="Enter your name" onChange={e => onSetUserName({ name: e.target.value })} />
);

UserName.propTypes = {
  onSetUserName: PropTypes.func.isRequired,
};

export default UserName;
