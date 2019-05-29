import { connect } from 'react-redux';
import App from '../../components/app';
import setUserNameAction from '../../actions/user-name';

const mapStateToProps = (state) => {
  const { name } = state.userName;
  return {
    name,
  };
};

const mapDispatchToProps = { setUserNameAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
