import { connect } from 'react-redux';
import GameBoard from '../../components/game-board';
import { startGetLeadersAction } from '../../actions/leader-board';
import { onGameStopAction } from '../../actions/game-play';

const mapStateToProps = (state) => {
  const { leaders } = state.leadersBoard;
  const { modes, mode } = state.modes;
  const { play } = state.gamePlay;
  return {
    leaders, modes, mode, play,
  };
};

const mapDispatchToProps = { startGetLeadersAction, onGameStopAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameBoard);
