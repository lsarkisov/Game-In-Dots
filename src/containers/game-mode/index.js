import { connect } from 'react-redux';
import GameMode from '../../components/game-mode';
import {
  startGetGameModesAction,
  onGameModeSelectAction,
} from '../../actions/game-modes';

const mapStateToProps = (state) => {
  const { modes } = state.modes;
  const { play } = state.gamePlay;
  return {
    modes,
    play,
  };
};

const mapDispatchToProps = {
  startGetGameModesAction,
  onGameModeSelectAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameMode);
