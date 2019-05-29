import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueKey from '../../utils';

class GameMode extends Component {
  componentDidMount() {
    const { startGetGameModesAction } = this.props;
    startGetGameModesAction();
  }

  render() {
    const { modes } = this.props;
    return (
      <>
        {modes && modes.length
          && (
            <ul>
              {
                modes.map(mode => (
                  <li key={`key-${uniqueKey()}`}>
                    <h2>{mode.field}</h2>
                    <p>{mode.delay}</p>
                  </li>
                ))
              }
            </ul>
          )
        }
      </>
    );
  }
}

GameMode.defaultProps = {
  modes: null,
};

GameMode.propTypes = {
  startGetGameModesAction: PropTypes.func.isRequired,
  modes: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.number,
    delay: PropTypes.number,
  })),
};

export default GameMode;
