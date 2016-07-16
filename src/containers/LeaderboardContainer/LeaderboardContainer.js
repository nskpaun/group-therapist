import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWidgets } from 'modules/Widgets';

import styles from './styles.scss'
import GameLeaderboard from 'components/GameLeaderboard';

const propTypes = {
};

class LeaderboardContainer extends Component {
  render() {
    const {widgets, isFetching, onClick} = this.props;

    const leaderBoards = widgets ? widgets.map(widget =>
      <GameLeaderboard key={widget.gameId} widget={widget}/>
    ) : [];

    return (
      <div>
        <div style={{background: 'red'}} onClick={onClick}>
          {'isFetching Widgets: ' + isFetching}
        </div>
        {leaderBoards}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    widgets: state.widgets.allWidgets,
    isFetching: state.widgets.isFetching,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(fetchWidgets);
    }
  };
};

LeaderboardContainer.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeaderboardContainer);
