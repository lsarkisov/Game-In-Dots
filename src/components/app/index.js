import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueKey from '../../utils';

class App extends Component {
  componentDidMount() {
    const { startGetSettingsAction } = this.props;
    startGetSettingsAction();
  }

  render() {
    const { settings } = this.props;
    return (
      <div>
        <h1>Settings</h1>
        {settings
          && (
            <ul>
              {
                settings.map(setting => (
                  <li key={`key-${uniqueKey()}`}>
                    <h2>{setting.field}</h2>
                    <p>{setting.delay}</p>
                  </li>
                ))
              }
            </ul>
          )
        }
      </div>
    );
  }
}

App.defaultProps = {
  settings: null,
};

App.propTypes = {
  startGetSettingsAction: PropTypes.func.isRequired,
  settings: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.number,
    delay: PropTypes.number,
  })),
};

export default App;
