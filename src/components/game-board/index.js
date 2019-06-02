import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueKey, randomeRange } from '../../utils';
import Square from './square';

function activeCell(iRow, iCell, active) {
  return iRow === active[0] && iCell === active[1];
}

let interval;

class GameBoard extends Component {
  state = {
    field: 5,
    squares: null,
    start: false,
    active: [],
    selected: [],
    hit: [],
    miss: [],
  }

  componentDidMount() {
    this.addSquares();
  }

  componentDidUpdate() {
    const { play, mode } = this.props;
    const { start, field } = this.state;

    if (play && play !== start) {
      this.onPlay();
    }

    if (mode && mode.field !== field) {
      this.addSquares(mode.field);
    }
  }

  onPlay = () => {
    const { play, modes, mode } = this.props;
    let t;

    if (mode) {
      const { delay, field } = mode;
      t = delay;
      this.setState({ field });
      this.addSquares(field);
    } else {
      t = modes[0].delay;
      this.setState({ field: modes[0].field });
      this.addSquares(modes[0].field);
    }

    this.setState({
      start: play,
    });

    interval = setInterval(() => {
      const { field, selected } = this.state;
      let active;
      let result = true;

      while (result) {
        active = [randomeRange(field), randomeRange(field)];
        result = !!selected.filter(
          s => s[0] === active[0] && s[1] === active[1],
        ).length;
      }

      this.setState({
        active,
      });
    }, t);
  }

  addSquares = (f) => {
    const field = !f ? this.state.field : f;
    const len = field * field + 1;
    const squares = [];
    let rows = [];

    for (let i = 1; i < len; i++) {
      if (i % field === 0) {
        rows.push(<Square status={i} />);
        squares.push(rows);
        rows = [];
      } else {
        rows.push(<Square status={i} />);
      }
    }
    this.setState({ field: f, squares });
  }

  onClick = (iRow, iCell, isActive, isHit, isMiss) => {
    if (isHit || isMiss) {
      return false;
    }
    const {
      field, selected, hit, miss, start,
    } = this.state;

    if (!start) {
      return false;
    }

    const result = selected.filter(item => item.length && activeCell(iRow, iCell, item));

    if (field * field / 2 < hit.length || field * field / 2 < miss.length) {
      if (hit.length > miss) {
        alert('Game over, you are winner!');
      } else {
        alert('Game over, you lost');
      }
      this.onStopGame();
      return false;
    }

    if (!result.length) {
      this.setState({
        selected: [...selected, [iRow, iCell]],
        hit: isActive ? [...hit, [iRow, iCell]] : [...hit],
        miss: !isActive ? [...miss, [iRow, iCell]] : [...miss],
      });
    }
    return true;
  }

  onStopGame = () => {
    const { onGameStopAction } = this.props;

    clearInterval(interval);
    this.setState({
      active: [],
      selected: [],
      hit: [],
      miss: [],
      start: false,
    });
    onGameStopAction();
  }

  render() {
    const {
      squares, active, hit, miss,
    } = this.state;

    return (
      <div className="game-board">
        {squares && squares.length
          && squares.map((row, iRow) => (
            <div key={uniqueKey()} className="game-board_row">
              {
                row.map((square, iCell) => {
                  const isActive = activeCell(iRow, iCell, active);
                  const isHit = hit.filter(h => h[0] === iRow && h[1] === iCell).length;
                  const isMiss = miss.filter(m => m[0] === iRow && m[1] === iCell).length;
                  return (
                    <div
                      key={uniqueKey()}
                      className={`
                        game-board_cell
                        ${isActive ? 'active' : ''}
                        ${isHit ? 'hit' : ''}
                        ${isMiss ? 'miss' : ''}
                      `}
                      role="button"
                      tabIndex={0}
                      onClick={() => this.onClick(iRow, iCell, isActive, isHit, isMiss)}
                      onKeyPress={() => {
                        // ... TODO ;)
                      }}
                    >
                      { square }
                    </div>
                  );
                })
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default GameBoard;


GameBoard.defaultProps = {
  modes: null,
  mode: null,
  play: false,
};

GameBoard.propTypes = {
  modes: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.number.isRequired,
    delay: PropTypes.number.isRequired,
  })),
  mode: PropTypes.shape({
    field: PropTypes.number.isRequired,
    delay: PropTypes.number.isRequired,
  }),
  play: PropTypes.bool,
  onGameStopAction: PropTypes.func.isRequired,
};
