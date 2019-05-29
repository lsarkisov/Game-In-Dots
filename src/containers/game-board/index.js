import { connect } from 'react-redux';
import GameBoard from '../../components/game-board';
import { startGetLeadersAction } from '../../actions/leader-board';

const mapStateToProps = (state) => {
  const { leaders } = state.leadersBoard;
  return { leaders };
};

const mapDispatchToProps = { startGetLeadersAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameBoard);
