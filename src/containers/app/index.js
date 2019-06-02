import { connect } from 'react-redux';
import App from '../../components/app';
import setUserNameAction from '../../actions/user-name';
import { onGameStartAction } from '../../actions/game-play';

const mapStateToProps = (state) => {
  const { mode } = state.modes;
  const { name } = state.userName;
  return {
    name,
    mode,
  };
};

const mapDispatchToProps = { setUserNameAction, onGameStartAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
