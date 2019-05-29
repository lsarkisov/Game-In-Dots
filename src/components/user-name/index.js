import React from 'react';
import PropTypes from 'prop-types';

const UserName = ({ onSetUserName }) => (
  <input type="text" onChange={e => onSetUserName({ name: e.target.value })} />
);

UserName.propTypes = {
  onSetUserName: PropTypes.func.isRequired,
};

export default UserName;
