import { connect } from 'react-redux';
import GameMode from '../../components/game-mode';
import {
  startGetGameModesAction,
  onGameModeSelectAction,
} from '../../actions/game-modes';

const mapStateToProps = (state) => {
  const { modes } = state.modes;
  return {
    modes,
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
