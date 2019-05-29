import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GameMode from '../../containers/game-mode';
import LeadersBoard from '../../containers/leader-board';
import UserName from '../user-name';

class App extends Component {
  onSetUserName = (name) => {
    const { setUserNameAction } = this.props;
    setUserNameAction(name);
  }

  render() {
    const { name } = this.props;
    return (
      <div className="container">
        <div className="col-6">
          <h1>Game</h1>
          <div>
            <GameMode />
            <UserName onSetUserName={this.onSetUserName} />
          </div>
          {name
            && (
            <p>
              Hi,
              { ` ${name}` }
            </p>
            )
          }
        </div>
        <div className="col-6">
          <LeadersBoard />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  name: '',
  mode: {
    field: null,
    delay: null,
  },
};

App.propTypes = {
  setUserNameAction: PropTypes.func.isRequired,
  name: PropTypes.string,
  mode: PropTypes.shape({
    field: PropTypes.number,
    delay: PropTypes.number,
  }),
};

export default App;
