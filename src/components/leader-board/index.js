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
      <div className="leader-board">
        {leaders && leaders.length > 0
          && (
            <>
              <h2>Leader Board</h2>
              <ul className="leader-board_list">
                {leaders.map(leader => (
                  <li className="leader-board_list" key={uniqueKey()}>
                    <span className="leader-board_name">{leader.name}</span>
                    <span className="leader-board_data">{leader.date}</span>
                    <span className="leader-board_time">{leader.time}</span>
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
