import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { uniqueKey } from '../../utils';

class GameMode extends Component {
  componentDidMount() {
    const { startGetGameModesAction } = this.props;
    startGetGameModesAction();
  }

  onModeSelect = (i) => {
    const { modes, onGameModeSelectAction } = this.props;
    onGameModeSelectAction(modes[i]);
  }

  render() {
    const { modes, play } = this.props;
    return (
      <div className={`game-mode ${play ? 'game-mode_play' : ''}`}>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Pick game mode
          </Dropdown.Toggle>

          <Dropdown.Menu className="game-mode_list">
            {modes && modes.length
              && modes.map((mode, i) => (
                <Dropdown.Item
                  key={`key-${uniqueKey()}`}
                  onClick={() => this.onModeSelect(i)}
                >
                  <h2>
                    mode
                    {mode.field}
                    -
                  </h2>
                  <p>
                    {mode.delay}
                    ms
                  </p>
                </Dropdown.Item>
              ))
            }
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

GameMode.defaultProps = {
  modes: null,
  play: false,
};

GameMode.propTypes = {
  startGetGameModesAction: PropTypes.func.isRequired,
  onGameModeSelectAction: PropTypes.func.isRequired,
  modes: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.number,
    delay: PropTypes.number,
  })),
  play: PropTypes.bool,
};

export default GameMode;
