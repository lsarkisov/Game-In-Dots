import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Alert } from 'react-bootstrap';
import GameMode from '../../containers/game-mode';
import LeadersBoard from '../../containers/leader-board';
import GameBoard from '../../containers/game-board';
import UserName from '../user-name';

class App extends Component {
  onSetUserName = (name) => {
    const { setUserNameAction } = this.props;
    setUserNameAction(name);
  }

  onPlay = () => {
    console.log('PLAY');
  }

  render() {
    const { name } = this.props;
    return (
      <div className="container game">
        <div className="row">
          <div className="col-6">
            <div className="row game-controlls">
              <div className="col-lg-4 col-md-12 col-sm-12"><GameMode /></div>
              <div className="col-lg-6 col-md-12 col-sm-12"><UserName onSetUserName={this.onSetUserName} /></div>
              <div className="col-lg-2 col-md-12 col-sm-12"><Button variant="secondary" onClick={this.onPlay} className="game-button">Play</Button></div>
            </div>
            <div>
              {name
                && (
                <Alert className="game-alert" variant="success">
                  Hi,
                  { ` ${name}` }
                </Alert>
                )
              }
            </div>
            <div>
              <GameBoard />
            </div>
          </div>
          <div className="col-6">
            <LeadersBoard />
          </div>
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
