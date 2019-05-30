import React, { Component } from 'react';
import { uniqueKey, randomeRange } from '../../utils';
import Square from './square';

function activeCell(iRow, iCell, active) {
  return iRow === active[0] && iCell === active[1];
}

let interval;

class GameBoard extends Component {
  state = {
    fields: 5,
    squares: null,
    active: [1, 3],
    selected: [],
    hit: [],
    miss: [],
  }

  componentDidMount() {
    this.addSquares();

    interval = setInterval(() => {
      const { fields, selected } = this.state;
      let active;
      let result = true;
      while (result) {
        active = [randomeRange(fields), randomeRange(fields)];
        result = !!selected.filter(s => s[0] === active[0] && s[1] === active[1]).length;
      }

      this.setState({
        active,
      });
    }, 1500);
  }

  addSquares = () => {
    const { fields } = this.state;
    const len = fields * fields + 1;
    const squares = [];
    let rows = [];

    for (let i = 1; i < len; i++) {
      if (i % fields === 0) {
        rows.push(<Square status={i} />);
        squares.push(rows);
        rows = [];
      } else {
        rows.push(<Square status={i} />);
      }
    }
    this.setState({ squares });
  }

  onClick = (iRow, iCell, isActive, isHit, isMiss) => {
    if (isHit || isMiss) {
      return false;
    }
    const { fields, selected, hit, miss } = this.state;
    const result = selected.filter(item => item.length && activeCell(iRow, iCell, item));
    
    if (fields * fields / 2 < (hit.length || miss.length)) {
      alert('Game over!');
      clearInterval(interval);
      return false;
    }
    
    if (!result.length) {
      this.setState({
        selected: [...selected, [iRow, iCell]],
        hit: isActive ? [...hit, [iRow, iCell]] : [...hit],
        miss: !isActive ? [...miss, [iRow, iCell]] : [...miss],
      });
    }
  }

  render() {
    const { squares, active, hit, miss } = this.state;
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
                      onClick={() => this.onClick(iRow, iCell, isActive, isHit, isMiss)}
                    >
                      { square }
                    </div>
                  )
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
