import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueKey from '../../utils';

class LeaderBoard extends Component {
  componentDidMount() {
    const { startGetLeadersAction } = this.props;
    startGetLeadersAction();
  }

  render() {
    const { leaders } = this.props;
    return (
      <div>
        {leaders && leaders.length > 0
          && (
            <>
              <h2>Leader Board</h2>
              <ul>
                {leaders.map(leader => (
                  <li className="leader" key={uniqueKey()}>
                    <span className="leader_name">{leader.name}</span>
                    <span className="leader_data">{leader.data}</span>
                    <span className="leader_time">{leader.time}</span>
                  </li>
                ))}
              </ul>
            </>
          )
        }
      </div>
    );
  }
}

LeaderBoard.defaultProps = {
  leaders: [],
};

LeaderBoard.propTypes = {
  startGetLeadersAction: PropTypes.func.isRequired,
  leaders: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
  })),
};

export default LeaderBoard;
