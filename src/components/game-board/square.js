import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ status }) => (
  <div className="game-board_square">
    { status }
  </div>
);

Square.defaultProps = {
  status: null,
};

Square.propTypes = {
  status: PropTypes.number,
};

export default Square;
