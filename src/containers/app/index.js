import { connect } from 'react-redux';
import App from '../../components/app';
import setUserNameAction from '../../actions/user-name';

const mapStateToProps = (state) => {
  const { mode } = state.modes;
  const { name } = state.userName;
  return {
    name,
    mode,
  };
};

const mapDispatchToProps = { setUserNameAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
