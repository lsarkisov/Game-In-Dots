import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueKey from '../../utils';

class GameBoard extends Component {
  componentDidMount() {
    console.log('GAME BOARD');
  }

  render() {
    return (
      <div className="game-board">
        TEST
      </div>
    );
  }
}

GameBoard.defaultProps = {
  leaders: [],
};

GameBoard.propTypes = {

};

export default GameBoard;
