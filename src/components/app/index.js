import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GameMode from '../../containers/game-mode';
import UserName from '../user-name';

class App extends Component {
  onSetUserName = (name) => {
    const { setUserNameAction } = this.props;
    setUserNameAction(name);
  }

  render() {
    const { name } = this.props;
    return (
      <>
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
      </>
    );
  }
}

App.defaultProps = {
  name: '',
};

App.propTypes = {
  setUserNameAction: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default App;
