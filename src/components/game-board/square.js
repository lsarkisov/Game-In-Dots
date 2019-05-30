import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Square extends Component {
  onClick = () => {
    // console.log(this.props.status);
  }

  render() {
    const { status } = this.props;
    return (
      <div className="game-board_square" onClick={this.onClick}>
        { status }
      </div>
    );
  }
}

Square.defaultProps = {
  status: null,
};

Square.propTypes = {
  status: PropTypes.number,
};

export default Square;
