import { connect } from 'react-redux';
import App from '../../components/app';
import { startGetSettingsAction } from '../../actions/settings';

const mapStateToProps = (state) => {
  const { settings } = state.settings;
  return {
    settings,
  };
};

const mapDispatchToProps = { startGetSettingsAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
